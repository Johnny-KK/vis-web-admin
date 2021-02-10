/** 标准后台请求返回接口 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  msg: string;
}

/** 分页后台请求返回接口 */
export interface ApiPageResponse<T> extends ApiResponse<T> {
  page: number;
  rows: number;
}

// 服务器vo
export interface ServerVo {
  id?: string; // 主键
  name: string; // 服务器名
  ip: string; // 服务器IP
  domain: string; // 域名
  rmk: string; // 备注
}

// 服务vo
export interface ServeVo {
  id?: string; // 主键
  serverId : string // 所属服务器ID
  serverName?: string // 所属服务器名称
  name: string; // 服务名
  port: string; // 端口号
  isDocker: string; // 是否为docker服务 Y/N
  rmk: string; // 备注
}

// 服务器&服务vo
export interface ServerWithServeVo {
  id:string // 服务器ID
  serverName: string// 服务器名称
  serverIp: string// 服务器IP
  serverDomain: string // 服务器域名
  serveList: {
    serveId: string // 服务ID
    serveName: string // 服务名称
    servePort: string // 服务端口
  }[] // 下属服务列表
}