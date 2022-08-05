import Layout from '@/layout'
export default {
  path: '/statistical',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/statistical'),
      meta: { title: '对账统计', icon: 'table' }
    }
  ]
}
