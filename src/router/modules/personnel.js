import Layout from '@/layout'
export default {
  path: '/personnel',
  redirect: '/personnel',
  component: Layout,
  meta: { title: '人员管理', icon: 'lock' },
  children: [
    {
      path: 'list',
      component: () => import('@/views/personnel/list'),
      meta: { title: '人员列表'}
    },
    {
      path: 'count',
      component: () => import('@/views/personnel/count'),
      meta: { title: '人效统计'}
    },
    {
      path: 'workload',
      component: () => import('@/views/personnel/workload'),
      meta: { title: '工作量列表'}
    }
  ]
}
