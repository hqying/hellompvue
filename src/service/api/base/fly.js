import {BASE_SERVER_URL} from '@/config/api'

var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()

fly.config = {
  method: '',
  headers: {},
  baseURL: BASE_SERVER_URL,
  parseJson: true,
  timeout: ''
}

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['X-Tag'] = 'flyio'
  // 打印出请求体
  // console.log(request.body)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    // 发生网络错误后会走到这里
    return Promise.resolve(err)
  }
)

export const http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      fly.get(url, params)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      fly.post(url, params)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    });
  }
  
}
