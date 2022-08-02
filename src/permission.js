import router from '@/router'
import store from '@/store' // 引入store拿到token
// 路由守卫
// 白名单
const WhiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  if (store.state.user.data) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (WhiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
