<template>
  <div id="app">
    <div class="login-container">
      <div class="login-form">
        <img src="./img/logo.png" alt="" class="login-logo">
        <!-- from表单 -->
        <div>
          <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="auto" class="demo-ruleForm">
            <el-form-item prop="pass">
              <el-input v-model="ruleForm.pass" type="text" autocomplete="off" placeholder="请输入手机号" class="input">
                <template #prefix>
                  <i class="el-icon-mobile-phone" />
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="checkPass">
              <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" placeholder="请输入密码" class="input">
                <template #prefix>
                  <i class="el-icon-lock" />
                </template>
                <template #suffix>
                  <i class="iconfont icon-yincangmima" />
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="age">
              <el-input v-model.number="ruleForm.age" placeholder="请输入验证码" class="input">
                <template #prefix>
                  <i class="iconfont icon-yanzhengma" />
                </template>
                <template #suffix>
                  <img class="image" src="./img/yzm.png" alt="">
                </template>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" class="dl" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang='scss'>
.login-container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url('./img/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    .login-form{
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
        .login-logo{
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
  }
  :deep(.input){
    width: 446px;
    height: 52px;
  }
  }

}

.dl{
  width: 446px;
  height: 52px;
  background-color: #4563E5;
}
.image{
  height: 40px;
}

</style>
