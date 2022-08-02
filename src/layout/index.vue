<!-- 主页 -->
<template>
  <div>
    <TopNavigation />
    <SideNavigation />
  </div>
</template>

<script>
import SideNavigation from './components/SideNavigation'
import TopNavigation from './components/TopNavigation'
export default {
  components: {
    SideNavigation,
    TopNavigation
  },
  data() {
    return {

    }
  },
  computed: {
  },
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  methods: {

  }
}
</script>
<style scoped>

</style>
