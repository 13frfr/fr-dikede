import { getUserInfoApi, login } from "@/api/user";
import {setTokentime} from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: "",
    userId: "",
    userInfo: {},
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setResInfo(state, payload) {
      state.userId = payload;
    },
  },
  actions: {
    // 登录获取token
    async getToken(context, payload) {
      const res = await login(payload);
      context.commit("setToken", res.token);
      context.commit("setResInfo", res.userId);
      // 调用登录成功，存token的时间戳
      setTokentime()
    },
    // 获取用户信息
    async getUserInfo(context) {
      const id = context.state.userId;
      console.log(id);
      const userInfo = await getUserInfoApi(id);
      context.commit("setUserInfo", userInfo.data);
    },
    // 退出 
    logout(context){
      context.commit('setToken','')
      context.commit('setUserInfo',{})
      context.commit('setResInfo','')
    }
  },
  
};
