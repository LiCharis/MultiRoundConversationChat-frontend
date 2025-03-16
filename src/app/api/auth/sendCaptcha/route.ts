import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const telephone = searchParams.get('telephone');

    if (!telephone) {
      return NextResponse.json({
        success: false,
        message: '手机号不能为空'
      }, { status: 400 });
    }

    // 调用后端发送验证码接口
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sendCaptcha?telephone=${telephone}`);
    const data = await response.json();

    if (data.data) {
      return NextResponse.json({
        success: true,
        message: '验证码发送成功'
      });
    }

    return NextResponse.json({
      success: false,
      message: data.message || '验证码发送失败'
    }, { status: 400 });

  } catch (error) {
    console.error('Send captcha error:', error);
    return NextResponse.json({
      success: false,
      message: '服务器错误'
    }, { status: 500 });
  }
} 