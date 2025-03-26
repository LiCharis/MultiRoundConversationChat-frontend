import { API_CONFIG } from './config';

interface FetchOptions extends RequestInit {
  baseUrl?: string;
  path?: string;
  params?: Record<string, string>;
  timeout?: number;
}

interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

/**
 * API请求工具
 * 封装fetch请求，统一处理API路径和错误
 */
export const api = {
  /**
   * 发送API请求
   * @param options 请求选项
   * @returns Promise<ApiResponse>
   */
  async request<T = any>(options: FetchOptions): Promise<ApiResponse<T>> {
    // 设置默认选项
    const {
      baseUrl = API_CONFIG.BASE_URL,
      path = '',
      params = {},
      timeout = API_CONFIG.TIMEOUT,
      ...fetchOptions
    } = options;

    // 构建完整URL
    let url = path.startsWith('http') ? path : `${baseUrl}${path}`;
    
    // 添加查询参数
    if (Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, value);
      });
      url = `${url}${url.includes('?') ? '&' : '?'}${searchParams.toString()}`;
    }

    // 确保headers存在
    const headers = new Headers(fetchOptions.headers || {});
    
    // 如果是JSON请求，添加Content-Type
    if (
      fetchOptions.body &&
      !headers.has('Content-Type') &&
      !(fetchOptions.body instanceof FormData)
    ) {
      headers.append('Content-Type', 'application/json');
    }

    // 创建请求选项
    const requestOptions: RequestInit = {
      ...fetchOptions,
      headers,
    };

    // 设置请求超时
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    requestOptions.signal = controller.signal;

    try {
      if (API_CONFIG.ENABLE_LOGGING) {
        console.log(`API请求: ${url}`, requestOptions);
      }

      // 发送请求
      const response = await fetch(url, requestOptions);
      clearTimeout(timeoutId);

      // 处理响应
      if (!response.ok) {
        throw new Error(`HTTP错误: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (API_CONFIG.ENABLE_LOGGING) {
        console.log(`API响应: ${url}`, data);
      }

      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      const err = error as Error;
      if (err.name === 'AbortError') {
        throw new Error(`请求超时(${timeout}ms)`);
      }
      throw error;
    }
  },

  /**
   * 发送GET请求
   * @param path API路径
   * @param params 查询参数
   * @param options 其他fetch选项
   * @returns Promise<ApiResponse>
   */
  get<T = any>(
    path: string,
    params: Record<string, string> = {},
    options: Omit<FetchOptions, 'path' | 'params' | 'method'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request({
      ...options,
      path,
      params,
      method: 'GET',
    });
  },

  /**
   * 发送POST请求
   * @param path API路径
   * @param body 请求体
   * @param options 其他fetch选项
   * @returns Promise<ApiResponse>
   */
  post<T = any>(
    path: string,
    body: any = {},
    options: Omit<FetchOptions, 'path' | 'body' | 'method'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request({
      ...options,
      path,
      method: 'POST',
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  },

  /**
   * 发送PUT请求
   * @param path API路径
   * @param body 请求体
   * @param options 其他fetch选项
   * @returns Promise<ApiResponse>
   */
  put<T = any>(
    path: string,
    body: any = {},
    options: Omit<FetchOptions, 'path' | 'body' | 'method'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request({
      ...options,
      path,
      method: 'PUT',
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  },

  /**
   * 发送DELETE请求
   * @param path API路径
   * @param body 请求体
   * @param options 其他fetch选项
   * @returns Promise<ApiResponse>
   */
  delete<T = any>(
    path: string,
    body: any = {},
    options: Omit<FetchOptions, 'path' | 'body' | 'method'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request({
      ...options,
      path,
      method: 'DELETE',
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  },
}; 