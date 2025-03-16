'use client';
import {useEffect, useState, useCallback} from 'react'
import {ProChatProvider} from '@ant-design/pro-chat';
import {useTheme} from 'antd-style';
import {
  Avatar,
  Layout,
  Select,
  Card,
  Button,
  Tooltip,
  theme,
  message
} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Meta from "antd/es/card/Meta";
import Control from "@/components/Control";
import Chat from "@/components/Chat";
import Loading from "@/app/loading";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from 'next/navigation';

export default function ChatPage() {
  const router = useRouter();
  const { token: themeToken } = theme.useToken();

  const [user, setUser] = useState<{ telephone?: string, nickName?: string }>({ telephone: '未登录', nickName: '未登录' });
  const [isLoading, setIsLoading] = useState(true);

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
        message.error('请先登录');
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      window.location.href = '/auth/login';
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const initCheck = async () => {
      try {
        await fetchUserProfile();
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initCheck();

    return () => {
      mounted = false;
    };
  }, [fetchUserProfile]);

  const [isNewChat, setIsNewChat] = useState([false]);
  const handleNewChatChange = (newData:any) => {
    setIsNewChat(newData);
  };

  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowComponent(true);
    }, 100);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const [currentMessages, setCurrentMessages] = useState([]);
  const [currentChatId, setCurrentChatId] = useState<string>('');

  const getCurrentMessages = (value: any) => {
    setCurrentMessages(value);
  }

  const getChatId = (value: any) => {
    setCurrentChatId(value);
  }

  const [collapsed, setCollapsed] = useState(false);
  const [siderWidth, setSiderWidth] = useState('280px');
  const onSiderCollapse = () => {
    setCollapsed(!collapsed);
    setSiderWidth(!collapsed ? '80px' : '280px');
  };

  const [selectedModel, setSelectedModel] = useState('qwen-plus');

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      const data = await response.json();
      
      if (data.data) {
        message.success('退出登录成功');
        router.push('/auth/login');
      } else {
        message.error(data.message || '退出登录失败');
      }
    } catch (error) {
      message.error('退出登录失败');
      console.error('Logout error:', error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#f0f2f5',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(124, 77, 255, 0.05) 0%, rgba(67, 134, 255, 0.05) 50%, rgba(0, 0, 0, 0) 100%)',
        pointerEvents: 'none',
      }} />
      
      {showComponent ? (
        <Layout style={{ height: '100%', background: 'transparent' }}>
          <ProChatProvider>
            <Sider
              width={280}
              collapsedWidth={80}
              collapsed={collapsed}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '4px 0 8px rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: collapsed ? 'center' : 'space-between',
                borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
              }}>
                {!collapsed && (
                  <h3 style={{ 
                    margin: 0,
                    background: 'linear-gradient(45deg, #7C4DFF, #4386FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    历史记录
                  </h3>
                )}
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={onSiderCollapse}
                  style={{
                    fontSize: '16px',
                    width: 32,
                    height: 32,
                  }}
                />
              </div>
              
              <div style={{ 
                height: 'calc(100% - 180px)', 
                overflow: 'auto',
                padding: '8px',
              }}>
                <Control getCurrentMessages={getCurrentMessages} getChatId={getChatId} isNewChat={isNewChat}/>
              </div>

              <Card
                size="small"
                bordered={false}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                bodyStyle={{
                  padding: collapsed ? '12px' : '16px',
                }}
              >
                <div
                  className="user-profile-button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '8px',
                  }}
                  onClick={() => router.push('/profile')}
                >
                  <Avatar
                    size={collapsed ? 'large' : 48}
                    src="/user.png"
                    style={{
                      border: '2px solid white',
                      boxShadow: '0 2px 8px rgba(124, 77, 255, 0.2)',
                      background: 'linear-gradient(45deg, #7C4DFF, #4386FF)',
                    }}
                  />
                  {!collapsed && (
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontWeight: 500,
                        color: '#000000',
                      }}>
                        {user.nickName}
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: 'rgba(0, 0, 0, 0.45)',
                      }}>
                        查看个人信息
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </Sider>

            <Layout>
              <Header style={{
                padding: '0 24px',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 1,
              }}>
                <Select
                  value={selectedModel}
                  style={{
                    width: 180,
                  }}
                  options={[
                    { value: 'qwen-plus', label: 'Qwen Plus' },
                    { value: 'deepSeek-chat', label: 'DeepSeek Chat' },
                  ]}
                  onChange={setSelectedModel}
                />

                <div style={{ display: 'flex', gap: '8px' }}>
                  <Tooltip title="个人信息">
                    <Button
                      type="text"
                      icon={<UserOutlined />}
                      onClick={() => router.push('/profile')}
                      style={{
                        color: '#7C4DFF',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="退出登录">
                    <Button
                      type="text"
                      icon={<LogoutOutlined />}
                      onClick={handleLogout}
                      style={{
                        color: '#FF4D4F',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </Tooltip>
                </div>
              </Header>

              <Content style={{ 
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(124, 77, 255, 0.02), rgba(67, 134, 255, 0.02))',
                padding: '24px',
              }}>
                <Chat currentMessagesValue={currentMessages} currentChatId={currentChatId} selectedModel={selectedModel} handleNewChatChange={handleNewChatChange}/>
              </Content>
            </Layout>
          </ProChatProvider>
        </Layout>
      ) : (
        <Loading/>
      )}
      <style jsx global>{`
        .user-profile-button:hover {
          background: rgba(124, 77, 255, 0.05);
        }
      `}</style>
    </div>
  );
} 