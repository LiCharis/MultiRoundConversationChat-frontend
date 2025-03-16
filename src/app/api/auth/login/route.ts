import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { telephone, captcha, rememberMe = false } = body;

    // 调用后端登录接口
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // 重要：允许跨域请求携带凭证
      body: JSON.stringify({
        telephone,
        captcha,
        rememberMe
      }),
    });

    const data = await response.json();
    
    if (data.data) {
      // 不需要手动存储 token，Sa-Token 会自动管理
      return NextResponse.json({
        success: true,
        user: data.data
      });
    }

    return NextResponse.json({
      success: false,
      message: data.message || '登录失败'
    }, { status: 401 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({
      success: false,
      message: '服务器错误'
    }, { status: 500 });
  }
} 