let axios = require('axios')
let qs = require('querystring')
// axios.defaults.baseURL = 'http://10.163.126.142:8080/user'
axios.defaults.baseURL = 'https://m.zhixianyun.com/api'
// axios.defaults.baseURL = 'http://1.zhixianren.com/api'
// axios.defaults.baseURL = 'http://192.168.1.16:8080/user'
let PostRequest = (D, url) => {
  D = qs.stringify(D)
  console.log(1, D)
  return axios.post(url, D).then(
    (res) => {
      if (res.status === 200) {
        console.log(1,'ok')
        return res.data
      }
    }
  ).catch((err) => {
    console.log('123', err)
    return err
  })
}
let GetRequest = (D, url) => {
  axios.defaults.baseURL = 'https://m.toutiao.com'
  // axios.defaults.baseURL = 'http://120.78.183.34:8000'
  console.log(1, D)
  return axios.get(url, { params: { D } }).then(
    (res) => {
      if (res.status === 200) {
        console.log(2,'ok')
        return res.data
      }
    }
  ).catch((err) => {
    console.log('456', err)
    return err
  })
}
exports.PostRequest = PostRequest;
exports.GetRequest = GetRequest;