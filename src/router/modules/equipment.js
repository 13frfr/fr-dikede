import Layout from '@/layout'
export default {
  path: '/equipment',
  redirect: '/equipment',
  component: Layout,
  meta: { title: '设备管理', icon: 'people' },
  children: [
    {
      path: 'equip',
      component: () => import('@/views/equipment/equip'),
      meta: { title: '设备管理'}
    },
    {
      path: 'state',
      component: () => import('@/views/equipment/state'),
      meta: { title: '设备状态'}
    },
    {
      path: 'type',
      component: () => import('@/views/equipment/type'),
      meta: { title: '设备类型管理'}
    }
  ]
}
