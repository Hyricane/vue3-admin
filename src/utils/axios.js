import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router/index'
import { localGet } from './index'
import config from '~/config'

const api = axios.create({
  baseURL: config[import.meta.env.MODE].baseUrl,
  timeout: 3000,
  headers: {
    'X-Requested-With':'XMLHttpRequest',
    'Content-Type':'application/json',
    'token': localGet('token') || '',
  }
})

// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器，内部根据返回值，重新组装，统一管理。
api.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    ElMessage.error('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
    if (res.data.message) ElMessage.error(res.data.message)
    if (res.data.resultCode == 419) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }

  return res.data.data
})

export default api