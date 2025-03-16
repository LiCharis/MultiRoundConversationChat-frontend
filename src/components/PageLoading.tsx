'use client';
import { Spin } from 'antd';

export default function PageLoading() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0f2f5',
    }}>
      <Spin size="large" />
    </div>
  );
} 