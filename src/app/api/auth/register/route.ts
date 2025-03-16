import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { telephone, captcha } = body;

    // 调用后端注册接口
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        telephone,
        captcha
      }),
    });

    const data = await response.json();

    if (data.data) {
      return NextResponse.json({
        success: true,
        message: '注册成功'
      });
    }

    return NextResponse.json({
      success: false,
      message: data.message || '注册失败'
    }, { status: 400 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({
      success: false,
      message: '服务器错误'
    }, { status: 500 });
  }
} 