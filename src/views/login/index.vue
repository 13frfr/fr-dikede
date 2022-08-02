<!--  -->
<template>
  <div class="container">
    <div class="login">
      <el-form
        ref="loginFrom"
        :model="loginFrom"
        :rules="loginFormRules"
        class="demo-ruleForm"
      >
        <!-- 账号 -->
        <el-form-item prop="loginName">
          <el-input
            v-model="loginFrom.loginName"
            placeholder="请输入账号"
            prefix-icon="el-icon-mobile"
            @keyup.enter.native="login"
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginFrom.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            type="password"
            show-password="true"
            @keyup.enter.native="login"
          >
            <i
              slot="suffix-icon"
              class="iconfont icon-yanjing_xianshi_o"
            /></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <div>
          <el-form-item prop="code">
            <el-input
              v-model="loginFrom.code"
              placeholder="请输入验证码"
              clearable
              @keyup.enter.native="login"
            >
              <i
                slot="prefix"
                class="iconfont icon-yanzhengyanzhengma iconfontdunp"
              />
              <div slot="append" class="verify" @click="getCode">
                <img :src="imgUrl" alt="">
              </div>
            </el-input>
          </el-form-item>
          <!-- <div class="validation-code">11111</div> -->
        </div>
        <el-form-item>
          <el-button
            :loading="loading"
            class="button"
            type="primary"
            @click="login"
          > 登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 头像 -->
    <div class="login-img" />
  </div>
</template>

<script>
import { getCode } from '@/api/login'
export default {
  data() {
    return {
      imgUrl: '',
      loading: false,
      loginFrom: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0
      },
      loginFormRules: {
        loginName: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请填写验证码', trigger: 'blur' },
          { min: 4, message: '验证码长度不能小于四', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getCode()
  },
  methods: {
    // 发送验证码请求
    async getCode() {
      const len = 32
      const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
      const maxPos = chars.length
      let character = ''
      for (let i = 0; i < len; i++) {
        character += chars.charAt(Math.floor(Math.random() * maxPos))
      }
      this.loginFrom.clientToken = character
      const { data } = await getCode(character)
      // console.log(data)
      this.imgUrl = URL.createObjectURL(data)
      return this.imgUrl
    },
    // 登录
    async login() {
      try {
        await this.$refs.loginFrom.validate()
        this.loading = true
        await this.$store.dispatch('user/getToken', this.loginFrom)
        this.$message.success('登录成功')
        this.$router.push('/')
      } catch (err) { console.log(err) } finally {
        this.loading = false
      }
    }
  }
}
</script>
<style scoped lang="scss">
/* 背景图片 */
.container {
  width: 100%;
  height: 100%;
  line-height: 100%;
  background: url(~@/assets/background.jpg) no-repeat;
  position: relative;
}
/* 登录框 */
.login {
  position: absolute;
  width: 518px;
  margin: auto;
  height: 388px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  line-height: 388px;
  text-align: center;
  padding-right: 40px;
  padding-top: 80px;
  padding-left: 40px;
}
.login-img {
  position: absolute;
  width: 80px;
  height: 80px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 380px;
  right: 0;
  border-radius: 50%;
  background-color: red;
  background: url(~@/assets/logo.jpg) no-repeat;
  background-size: cover;
}
// 按钮样式
.el-button--primary {
  width: 100%;
}
.iconfontdunp {
  padding-left: 5px;
  line-height: 40px;
}
.verify{
  height: 40px;
  img{
  width: 120px;
  height: 40px;
}
}
.sidebar{
  display: block;
  margin-right: 50px;
}
</style>
