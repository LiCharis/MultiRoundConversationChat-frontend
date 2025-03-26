/**
 * API服务模块
 * 集中管理所有API请求路径和方法
 */
import { api } from './api';

/**
 * 权限与用户相关API
 */
export const authService = {
  /**
   * 登录
   */
  login(data: any) {
    return api.post('/api/auth/login', data);
  },
  
  /**
   * 注册
   */
  register(data: any) {
    return api.post('/api/auth/register', data);
  },
  
  /**
   * 发送验证码
   */
  sendCaptcha(telephone: string) {
    return api.get(`/api/auth/sendCaptcha`, { telephone });
  },
  
  /**
   * 检查登录状态
   */
  checkLogin() {
    return api.post('/api/auth/checkLogin', {});
  },
  
  /**
   * 获取用户资料
   */
  getProfile() {
    return api.get('/api/auth/getProfile');
  },
  
  /**
   * 退出登录
   */
  logout() {
    return api.post('/api/auth/logout', {});
  }
};

/**
 * 聊天相关API
 */
export const chatService = {
  /**
   * 获取对话响应
   */
  getResponse(data: any) {
    return api.post('/api/chat/getRes', data);
  },
  
  /**
   * 添加对话
   */
  add(data: any) {
    return api.post('/api/chat/add', data);
  },
  
  /**
   * 获取历史列表
   */
  getHistoryList() {
    return api.post('/api/chat/getHistoryList', {});
  },
  
  /**
   * 获取单个对话
   */
  getOne(id: string) {
    return api.post('/api/chat/getOne', { id });
  },
  
  /**
   * 清空历史
   */
  clearHistory() {
    return api.post('/api/chat/clearHistory', {});
  },
  
  /**
   * 删除对话
   */
  delete(id: string) {
    return api.post('/api/chat/delete', { id });
  },
  
  /**
   * 更新对话
   */
  update(data: any) {
    return api.post('/api/chat/update', data);
  },
  
  /**
   * 获取带权重的对话历史
   */
  getHistoryWithWeights() {
    return api.post('/api/chat/historyWithWeights', {});
  }
}; 