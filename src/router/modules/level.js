import Layout from '@/layout'
export default {
  path: '/level',
  redirect: '/level',
  component: Layout,
  meta: { title: '点位管理', icon: 'tree' },
  children: [
    {
      path: 'area',
      component: () => import('@/views/level/area'),
      meta: { title: '区域管理'}
    },
    {
      path: 'point',
      component: () => import('@/views/level/point'),
      meta: { title: '点位管理'},
    },
    {
      path:'partners',
      component: () => import('@/views/level/partners'),
       meta: { title: '合作商管理'},
    }
  ]
}
