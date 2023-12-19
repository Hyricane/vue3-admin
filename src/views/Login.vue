<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <div class="title">Vue3.0 后台管理系统</div>
      </div>
      <el-form label-position="top" :rules="state.rules" :model="state.ruleForm" ref="loginForm" class="login-form">
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model.trim="state.ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="state.ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
          <el-button style="width: 100%" type="primary" size="large" @click="submitForm">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import axios from '@/utils/axios'
import md5 from 'js-md5'
import { reactive, ref } from 'vue'
import { localSet } from '@/utils'
const loginForm = ref(null)
const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  },
  checked: true,
  rules: {
    username: [
      { required: 'true', message: '账户不能为空', trigger: 'blur' }
    ],
    password: [
      { required: 'true', message: '密码不能为空', trigger: 'blur' }
    ]
  }
})
const submitForm = async () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      axios.post('/adminUser/login', {
        userName: state.ruleForm.username || '',
        passwordMd5: md5(state.ruleForm.password)
      }).then(res => {
        localSet('token', res)
        window.location.href = '/'
      })
    } else {
      console.log('error submit!!')
      return false;
    }
  })
}
const resetForm = () => {
  loginForm.value.resetFields();
}
</script>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff url("@/assets/loginbg.jpg") no-repeat center center;
  background-size: 100% auto;
}
.login-container {
  width: 420px;
  height: 380px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.head .title {
  font-size: 28px;
  font-weight: bold;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
</style>