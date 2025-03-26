import {NextResponse} from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {telephone, captcha} = body;

        // 调用后端注册接口
        const response = await fetch("http://localhost:8130/api/auth/register", {
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
        // 创建响应
        const nextResponse = NextResponse.json(data);


        // 获取Set-Cookie 头
        const cookie = response.headers.get('set-cookie');

        // 正确处理多个 cookie
        if (cookie) {
            console.log(cookie);

            nextResponse.headers.append('Set-Cookie', cookie);

            // 先按分号分割，获取第一部分（name=value）
            const mainPart = cookie.split(';')[0];
            // 再按等号分割获取 name 和 value
            const [name, value] = mainPart.split('=');
            // 存储 cookie
            nextResponse.cookies.set(name, value);
        }

        return nextResponse;
    } catch (error) {
        return NextResponse.error();
    }
} 