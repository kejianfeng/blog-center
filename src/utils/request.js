import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)
const request = (url, method, params, option = {}) => {
  if (method === 'get') {
    option.params = params
  } else {
    option.data = params
  }
  return service({
    url,
    method,
    ...option
  })
}

export {
  service,
  request
}
