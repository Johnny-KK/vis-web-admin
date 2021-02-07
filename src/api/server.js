import request from '@/utils/request'

// 条件查询服务器信息列表
export function apiQueryServerList(params) {
  return request({
    url: '/api/Server/queryServerList',
    method: 'get',
    params
  })
}
