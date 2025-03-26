/**
 * 后端服务API工具
 * 专门用于在服务端组件或API路由中调用外部API
 */
import { cookies } from 'next/headers';
import { API_CONFIG } from './config';
import { NextResponse } from 'next/server';

// 基础URL
const BASE_URL = API_CONFIG.BASE_URL;

/**
 * 发送请求到外部API
 * @param path API路径
 * @param options 请求选项
 * @returns 响应结果
 */
export async function serverFetch(path: string, options: RequestInit = {}) {
  // 获取cookies
  const cookieStore = cookies();
  const cookieHeader = cookieStore.getAll()
    .map(cookie => `${cookie.name}=${cookie.value}`)
    .join('; ');
  
  // 构建完整URL
  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`;
  
  // 组装headers
  const headers = new Headers(options.headers || {});
  if (cookieHeader) {
    headers.set('Cookie', cookieHeader);
  }
  
  // 如果是JSON请求且没有设置Content-Type，则设置
  if (
    options.body && 
    !headers.has('Content-Type') && 
    !(options.body instanceof FormData)
  ) {
    headers.set('Content-Type', 'application/json');
  }
  
  // 发送请求
  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include',
  });
  
  return response;
}

/**
 * 处理API响应并设置cookies
 * @param response Fetch响应对象
 * @returns NextResponse对象
 */
export async function handleApiResponse(response: Response) {
  const data = await response.json();
  
  // 创建响应
  const nextResponse = NextResponse.json(data);
  
  // 获取Set-Cookie头
  const cookie = response.headers.get('set-cookie');
  
  // 处理cookie
  if (cookie) {
    nextResponse.headers.set('Set-Cookie', cookie);
    
    // 解析cookie字符串
    const mainPart = cookie.split(';')[0].trim();
    const [name, value] = mainPart.split('=');
    
    // 解析其他属性
    const options: Record<string, any> = {};
    cookie.split(';').slice(1).forEach(part => {
      const [key, val] = part.trim().split('=');
      options[key] = val || true;
    });
    
    // 设置cookie
    nextResponse.cookies.set(name, value, {
      path: options.Path,
      maxAge: options['Max-Age'] ? parseInt(options['Max-Age']) : undefined,
      expires: options.Expires ? new Date(options.Expires) : undefined,
      httpOnly: options.HttpOnly || false
    });
  }
  
  return nextResponse;
}

/**
 * 后端服务API
 * 用于在API路由或服务端组件中调用外部API
 */
export const serverApi = {
  /**
   * 发送GET请求
   * @param path API路径
   * @param options 请求选项
   * @returns 响应结果
   */
  async get(path: string, options: RequestInit = {}) {
    return serverFetch(path, {
      ...options,
      method: 'GET',
    });
  },
  
  /**
   * 发送POST请求
   * @param path API路径
   * @param body 请求体
   * @param options 请求选项
   * @returns 响应结果
   */
  async post(path: string, body: any = {}, options: RequestInit = {}) {
    return serverFetch(path, {
      ...options,
      method: 'POST',
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  }
}; 