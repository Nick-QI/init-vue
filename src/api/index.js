import axios from 'axios'
// import Cookies from 'js-cookie'
import test from './test'
const TIME_OUT = 10000
// 实例化 ajax请求对象
const ajaxinstance = axios.create({
  baseURL: '/',
  timeout: TIME_OUT,
  headers: {
    responseType: 'json',
    'Content-Type': 'application/json; charset=utf-8'
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 添加拦截器，处理 公用请求参数，和通用请求头部
ajaxinstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 请求响应拦截器
ajaxinstance.interceptors.response.use(
  response => {
    const { data } = response
    return data
  },
  error => Promise.reject(error)
)

// 实例化 ajax请求对象
const baseAjax = axios.create({
  baseURL: '/',
  timeout: TIME_OUT,
  headers: {
    responseType: 'json',
    'Content-Type': 'application/json; charset=utf-8'
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// 请求响应拦截器
baseAjax.interceptors.response.use(
  response => {
    const { data } = response
    return data
  },
  error => Promise.reject(error)
)

/**
 * [API api接口封装]
 * @type {Object}
 */
const API = {
  ...test(baseAjax)
}

export default API
