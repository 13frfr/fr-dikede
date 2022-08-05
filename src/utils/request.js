// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import{ getTokentime } from '@/utils/auth'
import router from '@/router';

function isTimeout(){
    const currentTime=Date.now();
    const tokenTime=getTokentime()
    const timeout=2*60*60*1000
    return currentTime-tokenTime > timeout
}
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}); // 创建一个axios的实例
service.interceptors.request.use(async(config) => {
  // if (store.state.user.token) {
  //   config.headers.Authorization = store.state.user.token;
  // }
  if(!store.state.user.token) return config
  // 判断是否有token
  if(isTimeout()){
    // 判断token是否过期
    // 过期 跳到登录页
    console.log('跳到登录页');
    await store.dispatch('user/logout')
    router.push('/login')
    return Promise.reject(new Error('登录过期'));
} else{
   // 没过期 携带请求头
    config.headers.Authorization= store.state.user.token
}
  return config;
}); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    // 成功
    if (res.config.responseType === "blob") {
      return res;
    }
    if (res.data.success) {
      const { success, msg } = res.data;
      if (success) {
        return res.data;
      }
      Message.error(msg);
      return Promise.reject(new Error(msg));
    }
    return res;
  },
  // 失败
  async function (error) {
    // Message.error("系统异常");
    if(error?.response?.status ===401){
      Message.error('登录过期')
      await store.dispatch('user/logout')
      router.push('/login')
  } else { 
      Message.error(error.message)
  }
    return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
