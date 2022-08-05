import Layout from '@/layout'
export default {
  path: '/workorder',
  component: Layout,
  redirect: '/workorder',
  meta: { title: '工单管理', icon: 'tree-table' },
  children: [
    {
      path: 'operating',
      component: () => import('@/views/workorder/operating'),
      meta: { title: '运营工单'},
    },
    {
      path:'operational',
      component: () => import('@/views/workorder/operational'),
      meta: { title: '运维工单'},
    }
  ]
}
