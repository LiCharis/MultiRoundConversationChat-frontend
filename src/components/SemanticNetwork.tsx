'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, Empty, Skeleton, Typography, Button, Space, Tooltip, Select } from 'antd';
import { NodeIndexOutlined, InfoCircleOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useTheme } from 'antd-style';
import dynamic from 'next/dynamic';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const { Title, Text } = Typography;
const { Option } = Select;

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

interface GraphNode {
  id: string;
  name: string;
  val: number;
  color: string;
  type: 'keyword' | 'entity' | 'topic' | 'dialogue';
  dialogueIndex?: number;
  x?: number;
  y?: number;
}

interface GraphLink {
  source: string;
  target: string;
  value: number;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

interface SemanticNetworkProps {
  history: DialogueRecord[];
  loading: boolean;
}

const SemanticNetwork: React.FC<SemanticNetworkProps> = ({ history, loading }) => {
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const [visualizationType, setVisualizationType] = useState<'keywords' | 'topics' | 'entities'>('keywords');
  const graphRef = useRef<any>(null);
  const theme = useTheme();

  // 根据权重获取节点大小
  const getNodeSize = (weight: number) => {
    // 放大基本节点大小，使节点更加分散
    return Math.max(8, Math.min(20, weight * 20));
  };

  // 根据类型获取节点颜色
  const getNodeColor = (type: string, index?: number) => {
    switch (type) {
      case 'keyword':
        return '#7C4DFF';
      case 'entity':
        return '#4386FF';
      case 'topic':
        return '#00BCD4';
      case 'dialogue':
        // 根据索引生成不同的颜色
        const colors = ['#009688', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800'];
        return colors[index! % colors.length];
      default:
        return '#7C4DFF';
    }
  };

  // 生成图数据
  useEffect(() => {
    if (history.length === 0) return;

    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];
    const nodeMap = new Map<string, boolean>();

    // 计算节点总数（预估）
    const estimatedNodeCount = history.length * (
      visualizationType === 'keywords' ? 5 : 
      visualizationType === 'entities' ? 3 : 4
    );
    
    // 图布局区域大小
    const graphWidth = 800;
    const graphHeight = 600;
    
    // 为每个对话创建节点，并设置初始位置
    history.forEach((dialogue, index) => {
      const dialogueId = `dialogue-${index}`;
      const shortQuery = dialogue.query.length > 15 
        ? `${dialogue.query.substring(0, 15)}...` 
        : dialogue.query;
      
      // 设置随机初始位置，但分散在布局区域内
      const angle = (index / history.length) * 2 * Math.PI;
      const radius = 200; // 初始布局半径
      
      nodes.push({
        id: dialogueId,
        name: shortQuery,
        val: getNodeSize(dialogue.weight),
        color: getNodeColor('dialogue', index),
        type: 'dialogue',
        dialogueIndex: index,
        // 添加初始位置属性
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      });
      nodeMap.set(dialogueId, true);

      // 根据可视化类型添加相关节点和连接
      if (visualizationType === 'keywords') {
        // 添加关键词节点，每个词的位置也分散开
        dialogue.semanticFeature.keywords.forEach((keyword, kidx) => {
          const keywordId = `keyword-${keyword}`;
          
          if (!nodeMap.has(keywordId)) {
            // 为关键词创建分散的初始位置
            const kwAngle = 2 * Math.PI * Math.random();
            const kwRadius = 100 + 300 * Math.random(); // 更大范围的随机半径
            
            nodes.push({
              id: keywordId,
              name: keyword,
              val: getNodeSize(0.5),
              color: getNodeColor('keyword'),
              type: 'keyword',
              // 随机初始位置
              x: Math.cos(kwAngle) * kwRadius,
              y: Math.sin(kwAngle) * kwRadius
            });
            nodeMap.set(keywordId, true);
          }
          
          // 创建连接，但减少引力
          links.push({
            source: dialogueId,
            target: keywordId,
            value: dialogue.weight * 0.6 // 减弱连接强度，让节点更容易分开
          });
        });
      } else if (visualizationType === 'entities') {
        // 添加实体节点
        dialogue.semanticFeature.entities?.forEach((entity, eidx) => {
          const entityId = `entity-${entity}`;
          
          if (!nodeMap.has(entityId)) {
            // 为实体创建分散的初始位置
            const entAngle = 2 * Math.PI * Math.random();
            const entRadius = 100 + 300 * Math.random();
            
            nodes.push({
              id: entityId,
              name: entity,
              val: getNodeSize(0.6),
              color: getNodeColor('entity'),
              type: 'entity',
              // 随机初始位置
              x: Math.cos(entAngle) * entRadius,
              y: Math.sin(entAngle) * entRadius
            });
            nodeMap.set(entityId, true);
          }
          
          // 创建连接
          links.push({
            source: dialogueId,
            target: entityId,
            value: dialogue.weight * 0.6
          });
        });
      } else if (visualizationType === 'topics') {
        // 添加主题节点
        Object.entries(dialogue.semanticFeature.topics).forEach(([topic, weight], tidx) => {
          const topicId = `topic-${topic}`;
          
          if (!nodeMap.has(topicId)) {
            // 为主题创建分散的初始位置
            const topicAngle = 2 * Math.PI * Math.random();
            const topicRadius = 100 + 300 * Math.random();
            
            nodes.push({
              id: topicId,
              name: topic,
              val: getNodeSize(weight),
              color: getNodeColor('topic'),
              type: 'topic',
              // 随机初始位置
              x: Math.cos(topicAngle) * topicRadius,
              y: Math.sin(topicAngle) * topicRadius
            });
            nodeMap.set(topicId, true);
          }
          
          // 创建连接
          links.push({
            source: dialogueId,
            target: topicId,
            value: weight * 0.6
          });
        });
      }
    });

    setGraphData({ nodes, links });
  }, [history, visualizationType]);

  const handleZoomToFit = () => {
    if (graphRef.current) {
      graphRef.current.zoomToFit(400, 60); // 增加边距，使节点不会挤在边缘
    }
  };

  // 更新组件挂载后自动缩放以适应所有节点
  useEffect(() => {
    // 延迟执行以确保布局已充分发散
    const timer = setTimeout(() => {
      if (graphRef.current && graphData.nodes.length > 0) {
        handleZoomToFit();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [graphData]);

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
          <Title level={4} style={{ margin: 0 }}>语义网络可视化</Title>
          <Tooltip title="展示对话中关键词、实体或主题之间的语义关联关系">
            <InfoCircleOutlined style={{ color: theme.colorPrimary }} />
          </Tooltip>
        </Space>
      }
      extra={
        <Space>
          <Select
            value={visualizationType}
            onChange={setVisualizationType}
            style={{ width: 120 }}
          >
            <Option value="keywords">关键词</Option>
            <Option value="entities">实体</Option>
            <Option value="topics">主题</Option>
          </Select>
          <Button 
            icon={<FullscreenOutlined />} 
            onClick={handleZoomToFit}
            type="text"
          >
            适应画布
          </Button>
          <Button
            onClick={() => {
              // 重新布局节点，增加随机性
              if (graphRef.current) {
                // 重启物理引擎
                graphRef.current.d3ReheatSimulation();
                // 给现有节点一些随机扰动，帮助分离重叠节点
                graphData.nodes.forEach(node => {
                  if (node.x && node.y) {
                    // 添加随机位移
                    node.x += (Math.random() - 0.5) * 200;
                    node.y += (Math.random() - 0.5) * 200;
                  }
                });
                setGraphData({...graphData});
              }
            }}
            type="text"
          >
            重新布局
          </Button>
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
      <div style={{ height: 600 }}>
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          nodeLabel="name"
          nodeVal="val"
          nodeColor="color"
          nodeCanvasObject={(node, ctx, globalScale) => {
            const { id, name, color, val } = node as unknown as GraphNode;
            const fontSize = Math.max(12, val * 1.2);
            const size = val;
            
            // 绘制节点
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            
            // 只有当缩放足够大时才显示文字
            if (globalScale >= 0.6) {
              ctx.font = `${fontSize}px Arial`;
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = '#333';
              
              // 为文本添加白色背景以提高可读性
              const textWidth = ctx.measureText(name).width;
              const bgPadding = 3;
              
              ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
              ctx.fillRect(
                -textWidth / 2 - bgPadding,
                fontSize / 2 + 2,
                textWidth + bgPadding * 2,
                fontSize + bgPadding * 2
              );
              
              ctx.fillStyle = '#222';
              ctx.fillText(name, 0, fontSize + 4 + bgPadding);
            }
          }}
          linkWidth={link => (link as any).value * 2}
          linkColor={() => 'rgba(124, 77, 255, 0.15)'} // 减少连接线透明度
          // 改进网络布局的参数
          cooldownTicks={300} // 更多冷却迭代
          d3AlphaDecay={0.005} // 更低的衰减率
          d3VelocityDecay={0.1} // 更低的速度衰减
          warmupTicks={300} // 更多预热迭代
          nodeRelSize={10} // 进一步增大节点尺寸
          onEngineStop={handleZoomToFit}
        />
      </div>
      
      <div style={{ marginTop: 16 }}>
        <Text type="secondary">
          {visualizationType === 'keywords' && '展示对话与关键词之间的关联，揭示对话中的核心概念。'}
          {visualizationType === 'entities' && '展示对话与实体之间的关联，帮助理解对话中涉及的人物、地点等实体。'}
          {visualizationType === 'topics' && '展示对话与主题之间的关联，反映对话内容的主题分布。'}
        </Text>
      </div>
    </Card>
  );
};

export default SemanticNetwork; 