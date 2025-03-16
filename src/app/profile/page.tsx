'use client';
import { useState, useEffect, useCallback } from 'react';
import { Card, Avatar, Typography, Descriptions, Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import { MobileOutlined, ClockCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // 处理鼠标移动效果
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 获取用户信息
  const fetchUserProfile = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/getProfile`, {
        credentials: 'include',
      });
      const data = await response.json();
      
      if (data.data) {
        setUser(data.data);
      } else {
        window.location.href = '/auth/login';
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      window.location.href = '/auth/login';
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 初始化检查
  useEffect(() => {
    let mounted = true;

    const initCheck = async () => {
      if (mounted) {
        await fetchUserProfile();
      }
    };

    initCheck();

    return () => {
      mounted = false;
    };
  }, [fetchUserProfile]);

  if (!user) return null;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0f2f5',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 动态背景 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(124, 77, 255, 0.1) 0%, 
          rgba(67, 134, 255, 0.1) 50%, 
          rgba(26, 54, 93, 0.1) 100%)`,
        zIndex: 0,
        transition: 'all 0.3s ease',
      }} />

      {/* 装饰性圆圈 */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(124, 77, 255, 0.1), rgba(67, 134, 255, 0.1))',
        filter: 'blur(40px)',
        top: '-50px',
        right: '-50px',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(67, 134, 255, 0.1), rgba(124, 77, 255, 0.1))',
        filter: 'blur(30px)',
        bottom: '-30px',
        left: '-30px',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <Card
        style={{
          width: '100%',
          maxWidth: 600,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          zIndex: 1,
          margin: '20px',
        }}
      >
        <Button 
          icon={<ArrowLeftOutlined />} 
          style={{ 
            marginBottom: 24,
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
          }}
          onClick={() => router.push('/chat')}
        >
          返回聊天
        </Button>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Avatar
            size={100}
            src={user.avatar ? user.avatar : '/user.png'}
            style={{
              border: '4px solid white',
              boxShadow: '0 4px 12px rgba(124, 77, 255, 0.2)',
              background: 'linear-gradient(45deg, #7C4DFF, #4386FF)',
            }}
          />
          <Title level={2} style={{
            margin: '16px 0 8px',
            background: 'linear-gradient(45deg, #7C4DFF, #4386FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {user.nickName}
          </Title>
          <Typography.Text type="secondary">
            个人账号
          </Typography.Text>
        </div>

        <Descriptions
          bordered
          column={1}
          labelStyle={{
            width: '120px',
            background: 'rgba(124, 77, 255, 0.05)',
          }}
          contentStyle={{
            background: 'white',
          }}
        >
            
          <Descriptions.Item label="手机号">
            <MobileOutlined style={{ color: '#7C4DFF', marginRight: 8 }} />
            {user.telephone}
          </Descriptions.Item>
          <Descriptions.Item label="账号状态">
            <span style={{ color: '#4386FF' }}>●</span> {user.state === 'ACTIVE' ? '正常' :'冻结'}
          </Descriptions.Item>
          <Descriptions.Item label="注册时间">
            <ClockCircleOutlined style={{ color: '#7C4DFF', marginRight: 8 }} />
            {user.createTime ? new Date(user.createTime).toLocaleString() : '暂无数据'}
          </Descriptions.Item>
          {user.lastLoginTime && (
            <Descriptions.Item label="最后登录">
              <ClockCircleOutlined style={{ color: '#7C4DFF', marginRight: 8 }} />
              {new Date(user.lastLoginTime).toLocaleString()}
            </Descriptions.Item>
          )}
        </Descriptions>

        <div style={{ marginTop: 24, display: 'flex', gap: 16, justifyContent: 'flex-end' }}>
          <Button
            type="primary"
            style={{
              background: 'linear-gradient(45deg, #7C4DFF, #4386FF)',
              border: 'none',
              boxShadow: '0 4px 12px rgba(124, 77, 255, 0.2)',
            }}
            onClick={() => message.info('功能开发中...')}
          >
            修改信息
          </Button>
        </div>
      </Card>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
} 