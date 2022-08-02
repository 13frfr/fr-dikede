<!-- 侧边导航组件 -->
<template>
  <div class="SideNavigation">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :router="true"
        >
          <!-- @open="handleOpen" @close="handleClose" -->
          <!-- 一级 -->
          <el-menu-item index="/404">
            <i class="el-icon-menu" />
            <span slot="title">帝可得</span>
          </el-menu-item>
          <!-- 工单 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-jilu" />
              <span>工单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">运营工单</el-menu-item>
              <el-menu-item index="1-2">运维工单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 点位 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location-information" />
              <span>点位管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">区域管理</el-menu-item>
              <el-menu-item index="1-2">点位管理</el-menu-item>
              <el-menu-item index="1-2">合作商管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 设备 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont icon-chongdianzhuang" />
              <span>设备管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">设备管理</el-menu-item>
              <el-menu-item index="1-2">设备状态</el-menu-item>
              <el-menu-item index="1-2">设备类型管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 人员 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="iconfont icon-renyuanshezhi-05" />
              <span>人员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">人员列表</el-menu-item>
              <el-menu-item index="1-2">人效统计</el-menu-item>
              <el-menu-item index="1-2">工作量列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 商品 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="iconfont icon-yanzhengyanzhengma" />
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">商品类型</el-menu-item>
              <el-menu-item index="1-2">商品管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 策略 -->
          <el-menu-item index="7">
            <i class="iconfont icon-diandeng-dengpao-zhaoming" />
            <span slot="title">策略管理</span>
          </el-menu-item>
          <!-- 订单 -->
          <el-menu-item index="8">
            <i class="iconfont icon-zhangdan" />
            <span slot="title">订单管理</span>
          </el-menu-item>
          <!-- 对账 -->
          <el-menu-item index="9">
            <i class="iconfont icon-zhangdan_o" />
            <span slot="title">对账统计</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.SideNavigation {
  margin-top: 60px;
}
.el-col-12 {
  width: 10%;
}
.el-submenu {
  .el-menu-item {
    min-width: 100%;
    text-align: center;
  }
}
.iconfont {
  display: inline-block;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
.icon-zhangdan_o {
  font-size: 22px;
}
.icon-zhangdan {
  font-size: 16px;
}
</style>
