<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <el-dropdown-menu>
          <div class="avatar-wrapper">
            <img
              :src="avatar + '?imageView2/1/w/80/h/80'"
              class="user-avatar"
              v-imgError="defaultImg"
            />
            <i class="el-icon-caret-bottom" />
            <span class="welcome">欢迎您,{{ userInfo.userName }}</span>
            <span @click="logout">退出</span>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import defaultImg from "@/assets/common/bigUserHeader.png";
const { mapState } = createNamespacedHelpers("user");

export default {
  data() {
    return {
      defaultImg: defaultImg,
    };
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
    ...mapState(["userInfo"]),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  // background: #fff;
  background-image: url("./img/navbar.png");
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .welcome {
    width: 108px;
    height: 21px;
    line-height: 21px;
    margin-right: 50px;
    margin-bottom: 10px;
    position: absolute;
    top: 12px;
    left: -100px;
  }
  .el-dropdown {
    display: inline-block;
    position: relative;
    color: #fff;
    font-size: 14px;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #fff;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          position: fixed;
          right: 170px;
          top: 5px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
