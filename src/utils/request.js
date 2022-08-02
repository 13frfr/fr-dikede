// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  timeout: 5000 // 请求时间限制
}) // 创建一个axios的实例
// 请求拦截器
service.interceptors.request.use((config) => {
  const token = store.state.user.data.token
  if (token) {
    config.headers.Authorization = config.headers.Authorization = token
  }
  return config
})
// 响应拦截器
service.interceptors.response.use((res) => {
  if (res.data.type === 'image/jpeg') {
    return res
  }
  if (res.config.url === '/api/user-service/user/1') {
    return res
  }
  const { msg, success } = res.data
  if (success) {
    return res
  }
  Message.error(msg)
  return Promise.reject(new Error(msg))
}, function(error) {
  Message.error('系统异常')
  return Promise.reject(error)
}
)
export default service // 导出axios实例
