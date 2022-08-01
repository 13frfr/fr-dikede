<template>
  <div id="app">
    <div class="login-container">
      <div class="login-form">
        <img src="./img/logo.png" alt="" class="login-logo" />
        <!-- 表单校验：1.添加model属性：整个表单数据 -->
        <!-- 表单校验：2.添加rules属性：整个表单校验规则 -->
        <!-- from表单 -->
        <el-form
          ref="loginForm"
          label-width="auto"
          class="demo-ruleForm"
          :model="loginForm"
          :rules="loginFormRules"
        >
          <!-- 账号 -->
          <el-form-item prop="loginName">
            <el-input
              type="text"
              placeholder="请输入账号"
              class="input"
              v-model="loginForm.loginName"
            >
              <template #prefix>
                <i class="el-icon-mobile-phone" />
              </template>
            </el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              :type="passwordType"
              placeholder="请输入密码"
              class="input"
              v-model="loginForm.password"
            >
              <template #prefix>
                <i class="el-icon-lock" />
              </template>
              <template #suffix>
                <span @click="closeEsy">
                  <i v-if="closes" class="eye iconfont icon-yincangmima" />
                  <i v-else class="eye iconfont icon-zhengyan" />
                </span>
              </template>
            </el-input>
          </el-form-item>

          <!-- 验证码 -->
          <el-form-item prop="code">
            <el-input
              placeholder="请输入验证码"
              class="input"
              v-model="loginForm.code"
              @keydown.enter.native="login"
            >
              <template #prefix>
                <i class="iconfont icon-yanzhengma" />
              </template>
              <template #suffix>
                <div class="pic">
                  <img
                    class="image"
                    :src="imgBanner"
                    alt=""
                    @click="changedImg"
                  />
                </div>
              </template>
            </el-input>
          </el-form-item>

          <!-- 登录 -->
          <el-form-item>
            <el-button type="primary" class="dl" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { logincode } from "@/api/user";
export default {
  data() {
    return {
      loginForm: {
        loginName: "admin",
        password: "admin",
        code: "",
        clientToken: "",
        loginType: 0,
      },
      loginFormRules: {
        // 规则名和数据名保持一致
        loginName: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            pattern: /^[a-zA-Z]+$/,
            message: "账号格式不正确",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[a-zA-Z]+$/,
            message: "账号格式不正确",
            trigger: "blur",
          },
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      passwordType: "password",
      closes: false,
      imgBanner: "",
    };
  },
  created() {
    this.changedImg();
  },
  methods: {
    async login() {
      try {
        await this.$refs.loginForm.validate();
        console.log("表单校验成功，可以发送请求");
        this.$store.dispatch("user/getToken", this.loginForm);
      } finally {
      }
    },
    async changedImg() {
      this.loginForm.clientToken = Math.random() * 10;
      const { data } = await logincode(this.loginForm.clientToken);
      // console.log(data);
      this.imgBanner = URL.createObjectURL(data);
      return this.imgBanner;
    },
    closeEsy() {
      // console.log(11);
      this.closes = !this.closes;
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
  },
};
</script>

<style lang="scss">
.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url("./img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  .eye {
    font-size: 30px;
  }
  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    .el-form-item__content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
    }
    .login-logo {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 50%;
      margin-left: -48px;
    }
    :deep(.input) {
      width: 446px;
      height: 52px;
    }
  }
}

.dl {
  width: 446px;
  height: 52px;
  background-color: #4563e5;
}
.image {
  position: absolute;
  top: -1px;
  right: -5px;
  width: 122px;
  height: 40px;
  background-color: #fff;
  border-right: 1px solid #c6c6c6;
}
</style>
