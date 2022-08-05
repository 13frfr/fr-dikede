import Layout from '@/layout'
export default {
  path: '/strategic',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/strategic'),
      meta: { title: '策略管理', icon: 'money' }
    }
  ]
}
