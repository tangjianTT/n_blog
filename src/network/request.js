import axios from 'axios'


export function request(config) {

  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://47.101.34.251:8088/',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(res);

    }
  )

  // 响应拦截
  instance.interceptors.response.use(res => {
      return res;
    }),
    err => {
      console.log(err);

    }

  // 3.发送真正的网络请求
  return instance(config)
}
