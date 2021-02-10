import { ApiResponse, ServerVo, ServeVo, ServerWithServeVo } from '@/core/entities';
import http from './axios';

/** ========================================== */

// 条件查询服务器列表以及下属服务列表
export function apiQueryServerListWithServe(params: { fuzzy: string; page: number; rows: number }): Promise<ApiResponse<ServerWithServeVo[]>> {
  return http.get('/server/queryServerListWithServe', { params });
}

// 查询所有服务器
export function apiQueryAllServerList(): Promise<ApiResponse<ServerVo[]>> {
  return http.get('/server/queryServerList');
}

// 保存服务器信息
export function apiSaveServer(form: ServerVo) {
  return http.post('/server/saveServer', form);
}

// 删除服务器
export function apiDelServerById(id: string) {
  return http.get('/server/delServerById', { params: { id } });
}

// 保存服务信息
export function apiSaveServe(form: ServeVo) {
  return http.post('/serve/saveServe', form);
}
