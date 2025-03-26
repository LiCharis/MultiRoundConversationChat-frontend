'use client';
import React from 'react';
import { Skeleton, Card, Tooltip, Typography, Badge, Space, Tag, Empty } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useTheme } from 'antd-style';

const { Text, Title } = Typography;

interface DialogueRecord {
  query: string;
  response: string;
  timestamp: number;
  turnIndex: number;
  weight: number;
  semanticFeature: {
    keywords: string[];
    topics: Record<string, number>;
    frequency: number;
    embedding: number[];
    entities: string[];
    coherenceScore: number;
  };
}

interface ChatHeatmapProps {
  history: DialogueRecord[];
  loading: boolean;
}

const ChatHeatmap: React.FC<ChatHeatmapProps> = ({ history, loading }) => {
  const theme = useTheme();

  // 计算颜色强度
  const getHeatColor = (weight: number) => {
    // 限制权重范围在0-1之间
    const normalizedWeight = Math.min(Math.max(weight, 0), 1);
    // 权重越高，颜色越深
    return `rgba(124, 77, 255, ${normalizedWeight})`;
  };

  // 获取关键词标签颜色
  const getKeywordColor = (index: number) => {
    const colors = ['#7C4DFF', '#4386FF', '#00BCD4', '#009688', '#8BC34A', '#CDDC39'];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <Card
        style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
        }}
      >
        <Skeleton active paragraph={{ rows: 8 }} />
      </Card>
    );
  }

  if (history.length === 0) {
    return (
      <Card
        style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          textAlign: 'center',
          padding: '40px 0',
        }}
      >
        <Empty description="暂无对话历史数据" />
      </Card>
    );
  }

  return (
    <Card
      title={
        <Space>
          <Title level={4} style={{ margin: 0 }}>对话历史热图</Title>
          <Tooltip title="热图显示每条对话的重要性权重，颜色越深表示对当前上下文越重要">
            <InfoCircleOutlined style={{ color: theme.colorPrimary }} />
          </Tooltip>
        </Space>
      }
      style={{
        width: '100%',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {history.map((record, index) => (
          <Card 
            key={index}
            size="small"
            style={{
              borderLeft: `4px solid ${getHeatColor(record.weight)}`,
              background: `linear-gradient(90deg, ${getHeatColor(record.weight / 3)} 0%, rgba(255, 255, 255, 0) 100%)`,
              borderRadius: '8px',
              marginBottom: '8px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <Text strong style={{ fontSize: '14px' }}>问: {record.query}</Text>
              </div>
              <Badge 
                count={`权重: ${(record.weight * 100).toFixed(0)}%`} 
                style={{ 
                  backgroundColor: getHeatColor(record.weight),
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              />
            </div>
            
            <div style={{ fontSize: '13px', color: 'rgba(0, 0, 0, 0.65)', marginBottom: '8px' }}>
              <Text type="secondary">答: {record.response.length > 50 ? `${record.response.substring(0, 50)}...` : record.response}</Text>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '8px' }}>
              {record.semanticFeature?.keywords.slice(0, 5).map((keyword, kidx) => (
                <Tag key={kidx} color={getKeywordColor(kidx)} style={{ margin: 0 }}>
                  {keyword}
                </Tag>
              ))}
              
              {record.semanticFeature?.entities?.length > 0 && (
                <Tooltip title={`实体: ${record.semanticFeature?.entities.join(', ')}`}>
                  <Tag color="blue">实体: {record.semanticFeature?.entities.length}</Tag>
                </Tooltip>
              )}
              
              <Tooltip title={`连贯性分数: ${(record.semanticFeature?.coherenceScore * 100).toFixed(0)}%`}>
                <Tag color="green">连贯性: {(record.semanticFeature?.coherenceScore * 100).toFixed(0)}%</Tag>
              </Tooltip>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default ChatHeatmap; 