import { Skeleton, Card } from 'antd';

export default function AuthSkeleton() {
  return (
    <Card style={{
      width: '100%',
      maxWidth: 400,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
    }}>
      <Skeleton avatar paragraph={{ rows: 4 }} active />
    </Card>
  );
} 