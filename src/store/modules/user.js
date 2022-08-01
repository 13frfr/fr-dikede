import { login } from "@/api/user"
import {getToken, setToken} from '@/utils/auth'
import  router from '@/router'
import {Message} from 'element-ui'

export default {
  namespaced: true,
  state: {
    token:getToken() || []
  },
  mutations: {
    setToken(state,payload){
      state.token = payload
      setToken(payload)
      
    }
  },
  actions: {
    async getToken(context,payload){
      const res = await login(payload)
      console.log(res);
      if(res.data.success){
        router.push('/dashboard')
      } else{
        Message.error(res.data.msg)
      }
      context.commit('setToken',res.data.token)
    }
  }
}