/*
    封装axios请求
    先来搞一拨编码格式
    链接: https://www.jianshu.com/p/a82a9f003e8b
    ajax  如果 用post 请求 需要设置 
    ajax.setRequestHeader("content-type","application/x-www-form-urlencoded"); why?
    
    form的enctype属性为编码方式，常用有两种
        1.application/x-www-form-urlencoded 这是默认方式
            当action为get的时候，浏览器会用该模式，把form数据转换成一个字串，(name1=value&name2=value2)
          此时get传递的数据可为obj 然后把这个字串append到url后面，用?分割,加载这个新的url,
        2.当action 为 post时,浏览器,浏览器把form数据封装到http body中，然后发送到server 可以为一个对象

        axios 当为post请求时，需要用qs.stringify(data) 转换一下格式，并且生命请求头

        headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                },
*/

//引入axios
import axios from 'axios'
import api from "./api.js"
import qs from "qs"
var cancel, promiseArr = {}
var baseURL = api.returnUrl()
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    return config
}, error => {
    return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, err => {
    if (err && err.response) {
       
    } else {
      
    }
    return Promise.resolve(err.response)
})


//设置默认请求头
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000;

export default {
    //get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: baseURL + url,
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                },
                data: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            })
        })
    },
    //post请求
    post(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                },
                url: baseURL + url,
                data: qs.stringify(param),
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            })
        })
    },
    //此项目不写域名 根据环境变量来决定域名
    returnUrl(){
        if(process.env.NODE_ENV=="development"){
            return "https://kd.youth.cn/"
        }else{
            return "/"
        }
    },
    // 返回当前域名
    returnHost(str){
        if(str.includes("https") || str.includes("http")){ // 有协议名
           return str
          }else{
            var protocol = location.protocol;
            var host = window.location.host;
            console.log(protocol + '//' + host+str)
            return protocol + '//' + host+str;
          }
    }
}