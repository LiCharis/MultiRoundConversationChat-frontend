'use client';
import React, { useState, useEffect } from 'react';
import { Card, Skeleton, Typography, Empty, Radio, Tooltip, Space } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Area, Line } from '@ant-design/plots';
import { useTheme } from 'antd-style';

const { Title, Text } = Typography;
const { Group, Button } = Radio;

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

interface ChartData {
  turnIndex: number;
  value: number;
  category: string;
}

interface WeightTrendChartProps {
  history: DialogueRecord[];
  loading: boolean;
}

const WeightTrendChart: React.FC<WeightTrendChartProps> = ({ history, loading }) => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [chartType, setChartType] = useState<'area' | 'line'>('area');
  const [metricType, setMetricType] = useState<'weight' | 'coherence' | 'frequency'>('weight');
  const theme = useTheme();

  // 生成图表数据
  useEffect(() => {
    if (history.length === 0) return;

    const data: ChartData[] = [];
    
    // 添加权重数据
    history.forEach(record => {
      if (metricType === 'weight') {
        data.push({
          turnIndex: record.turnIndex,
          value: record.weight,
          category: '重要性权重'
        });
      } else if (metricType === 'coherence') {
        data.push({
          turnIndex: record.turnIndex,
          value: record.semanticFeature.coherenceScore,
          category: '连贯性分数'
        });
      } else if (metricType === 'frequency') {
        data.push({
          turnIndex: record.turnIndex,
          value: record.semanticFeature.frequency,
          category: '词频'
        });
      }
    });
    
    setChartData(data);
  }, [history, metricType]);

  // 获取度量指标的标题和描述
  const getMetricInfo = () => {
    switch (metricType) {
      case 'weight':
        return {
          title: '对话重要性权重趋势',
          description: '显示每轮对话的重要性权重变化，权重越高表示对上下文贡献越大'
        };
      case 'coherence':
        return {
          title: '对话连贯性分数趋势',
          description: '显示对话连贯性随时间的变化，连贯性越高表示对话流程越自然'
        };
      case 'frequency':
        return {
          title: '关键词词频趋势',
          description: '显示每轮对话中关键词的出现频率，频率越高表示语义密度越大'
        };
    }
  };
  
  const metricInfo = getMetricInfo();

  // 获取图表配置
  const getConfig = () => {
    const baseConfig = {
      data: chartData,
      xField: 'turnIndex',
      yField: 'value',
      seriesField: 'category',
      meta: {
        turnIndex: {
          alias: '对话轮次',
        },
        value: {
          alias: metricType === 'weight' ? '重要性权重' : 
                metricType === 'coherence' ? '连贯性分数' : '词频',
          formatter: (v: number) => `${(v * 100).toFixed(0)}%`,
        },
      },
      xAxis: {
        label: {
          formatter: (v: string) => `第${v}轮`,
        },
      },
      yAxis: {
        label: {
          formatter: (v: string) => `${(parseFloat(v) * 100).toFixed(0)}%`,
        },
      },
      smooth: true,
      areaStyle: chartType === 'area' ? (
        () => {
          return {
            fill: 'l(270) 0:#ffffff 0.5:#7C4DFF66 1:#7C4DFF',
          };
        }
      ) : undefined,
      animation: {
        appear: {
          animation: 'path-in',
          duration: 1000,
        },
      },
    };

    if (chartType === 'area') {
      return {
        ...baseConfig,
        color: ['#7C4DFF'],
        areaStyle: () => {
          return {
            fill: 'l(270) 0:#ffffff 0.5:#7C4DFF66 1:#7C4DFF',
          };
        },
      };
    } else {
      return {
        ...baseConfig,
        color: ['#7C4DFF'],
        lineStyle: {
          lineWidth: 3,
        },
        point: {
          size: 5,
          shape: 'circle',
          style: {
            fill: 'white',
            stroke: '#7C4DFF',
            lineWidth: 2,
          },
        },
      };
    }
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
          <Title level={4} style={{ margin: 0 }}>{metricInfo.title}</Title>
          <Tooltip title={metricInfo.description}>
            <InfoCircleOutlined style={{ color: theme.colorPrimary }} />
          </Tooltip>
        </Space>
      }
      extra={
        <Space>
          <Group 
            value={metricType} 
            onChange={e => setMetricType(e.target.value)} 
            buttonStyle="solid"
            size="small"
          >
            <Button value="weight">权重</Button>
            <Button value="coherence">连贯性</Button>
            <Button value="frequency">词频</Button>
          </Group>
          
          <Group 
            value={chartType} 
            onChange={e => setChartType(e.target.value)} 
            buttonStyle="solid"
            size="small"
          >
            <Button value="area">面积图</Button>
            <Button value="line">折线图</Button>
          </Group>
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
      <div style={{ height: 400 }}>
        {chartType === 'area' ? (
          <Area {...getConfig()} />
        ) : (
          <Line {...getConfig()} />
        )}
      </div>
      
      <div style={{ marginTop: 16 }}>
        <Text type="secondary">
          {metricInfo.description}
        </Text>
      </div>
    </Card>
  );
};

export default WeightTrendChart; 