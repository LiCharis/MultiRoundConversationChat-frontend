'use client';
import { useState, useEffect } from 'react';
import { Card, Tabs, Form, Input, Button, message, Checkbox } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const router = useRouter();

  // 检查登录状态
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // 检查登录状态的函数
  const checkLoginStatus = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/checkLogin`, {
        credentials: 'include', // 重要：允许跨域请求携带凭证
      });
      const data = await response.json();
      if (data.data) {
        router.push('/chat');
      }
    } catch (error) {
      console.error('Check login status error:', error);
    }
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const sendCaptcha = async (telephone: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sendCaptcha?telephone=${telephone}`, {
        credentials: 'include',
      });
      const data = await response.json();
      
      if (data.data) {
        message.success('验证码发送成功');
        setCountdown(60);
      } else {
        message.error(data.message || '验证码发送失败');
      }
    } catch (error) {
      message.error('验证码发送失败');
    }
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/${activeTab}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 重要：允许跨域请求携带凭证
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.data) {
        if (activeTab === 'login') {
          // 不需要手动存储 token
          message.success('登录成功');
          router.push('/chat');
        } else {
          message.success('注册成功');
          setActiveTab('login');
          form.resetFields();
        }
      } else {
        message.error(data.message || `${activeTab === 'login' ? '登录' : '注册'}失败`);
      }
    } catch (error) {
      message.error(`${activeTab === 'login' ? '登录' : '注册'}失败`);
    } finally {
      setLoading(false);
    }
  };

  // 登出函数
  const logout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      const data = await response.json();
      if (data.data) {
        router.push('/auth/login');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0f2f5',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(124, 77, 255, 0.05) 0%, rgba(67, 134, 255, 0.05) 50%, rgba(0, 0, 0, 0) 100%)',
      }} />

      <Card
        style={{
          width: '100%',
          maxWidth: 400,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img src="/logo.svg" alt="Logo" style={{ height: 48 }} />
          <h2 style={{
            margin: '16px 0',
            background: 'linear-gradient(45deg, #7C4DFF, #4386FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            多轮对话问答系统
          </h2>
        </div>

        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          centered
          items={[
            {
              key: 'login',
              label: '登录',
              children: (
                <Form
                  form={form}
                  name="login"
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    name="telephone"
                    rules={[
                      { required: true, message: '请输入手机号' },
                      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
                    ]}
                  >
                    <Input
                      prefix={<MobileOutlined />}
                      placeholder="手机号"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    name="captcha"
                    rules={[
                      { required: true, message: '请输入验证码' },
                      { len: 4, message: '验证码为4位数字' }
                    ]}
                  >
                    <Input.Search
                      placeholder="验证码"
                      size="large"
                      enterButton={countdown > 0 ? `${countdown}s` : "获取验证码"}
                      onSearch={() => {
                        form.validateFields(['telephone']).then(values => {
                          sendCaptcha(values.telephone);
                        });
                      }}
                      disabled={countdown > 0}
                    />
                  </Form.Item>

                  <Form.Item name="rememberMe" valuePropName="checked">
                    <Checkbox>记住我</Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      style={{
                        width: '100%',
                        background: 'linear-gradient(45deg, #7C4DFF, #4386FF)',
                        border: 'none',
                      }}
                      size="large"
                    >
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              ),
            },
            {
              key: 'register',
              label: '注册',
              children: (
                <Form
                  form={form}
                  name="register"
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    name="telephone"
                    rules={[
                      { required: true, message: '请输入手机号' },
                      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
                    ]}
                  >
                    <Input
                      prefix={<MobileOutlined />}
                      placeholder="手机号"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    name="captcha"
                    rules={[
                      { required: true, message: '请输入验证码' },
                      { len: 4, message: '验证码为4位数字' }
                    ]}
                  >
                    <Input.Search
                      placeholder="验证码"
                      size="large"
                      enterButton={countdown > 0 ? `${countdown}s` : "获取验证码"}
                      onSearch={() => {
                        form.validateFields(['telephone']).then(values => {
                          sendCaptcha(values.telephone);
                        });
                      }}
                      disabled={countdown > 0}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      style={{
                        width: '100%',
                        background: 'linear-gradient(45deg, #7C4DFF, #4386FF)',
                        border: 'none',
                      }}
                      size="large"
                    >
                      注册
                    </Button>
                  </Form.Item>
                </Form>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
} 