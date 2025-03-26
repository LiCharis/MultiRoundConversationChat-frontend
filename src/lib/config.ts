/**
 * 应用全局配置
 */

// API相关配置
export const API_CONFIG = {
  // API基础路径
  BASE_URL: 'http://localhost:8130',
  // API超时时间（毫秒）
  TIMEOUT: 30000,
  // 是否在开发环境打印请求日志
  ENABLE_LOGGING: process.env.NODE_ENV === 'development',
}

// 其他全局配置可以在此添加 