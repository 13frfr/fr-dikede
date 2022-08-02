import { login, UserInfo } from '@/api/login'
export default {
  namespaced: true,
  state: {
    data: '',
    userInfo: ''
  },
  mutations: {
    setToken(state, data) {
      state.data = data
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    async getToken(context, payload) {
      // console.log(context)
      const { data } = await login(payload)
      context.commit('setToken', { ...data })
      context.dispatch('getUserInfo', data.userId)
    },
    async getUserInfo(context, payload) {
      try {
        const { data } = await UserInfo(payload)
        context.commit('setUserInfo', data)
      } catch (err) { console.log(err) }
    }
  },
  modules: {}
}
