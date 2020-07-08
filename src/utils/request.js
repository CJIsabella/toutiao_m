import axios from 'axios'
// 如果后面有多个域名请求就可以创建多个请求实例，这里的request就是一个请求实例
const request = axios.create({
    // 基础路径
    baseURL: 'http://ttapi.research.itcast.cn/'
})

export default request
