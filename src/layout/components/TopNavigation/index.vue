<!--  -->
<template>
  <div class="TopNavigation">
    <div class="titleNav">
      <div class="logo"><img src="http://likede2-admin.itheima.net/img/logo.3673fab5.png" alt=""></div>
      <div class="userNav">
        <div class="userImg"><img src="" alt=""></div>
        <div class="username">欢迎你：{{ userInfo.userName }}</div>
        <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
          <el-button>退出</el-button>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['userInfo'])
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
<style scoped lang="scss">
.TopNavigation{
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 99999;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    left: 0;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
}
.titleNav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .logo{
         height: 100%;
         line-height: 60px;
         text-align: center;
         overflow: hidden;
        //  padding-top: 10px;
        img{
            height: 40px;
             width: 100%;
             padding-top: 10px;
        }
    }
    .userNav{
        color:#fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .el-button{
            background: transparent;
            border: unset;
            color:#fff;
        }
        div{
            margin-left: 20px;
        }
    }
}
</style>
