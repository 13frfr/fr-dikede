import request from '@/utils/request'
export const getCode = (clientToken) => {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'

  })
}

// 登录接口
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/user-service/user/login',
    data
  })
}
// 获取用户详细详细
export const UserInfo = (id) => {
  return request({
    url: '/user-service/user/' + id
  })
}
