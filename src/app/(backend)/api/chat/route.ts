import { NextResponse } from 'next/server';
import { serverApi, handleApiResponse } from '@/lib/server-api';

export async function POST(request: Request) {
    const message = await request.json();
    try {
        const response = await serverApi.post('/api/chat/getRes', message);
        return handleApiResponse(response);
    } catch (error) {
        console.error('获取聊天响应失败:', error);
        return NextResponse.json(
            { code: 500, message: '获取聊天响应失败', data: null },
            { status: 500 }
        );
    }
}
