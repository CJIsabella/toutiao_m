import request from '@/utils/request.js'

// 用户登录
export const login = data => {
    return request.post('/app/v1_0/authorizations', data)
    // return request({
    //     method: 'POST',
    //     url: '/app/v1_0     authorizations',
    //     data
    //   })
}

// 请求验证码
export const sendyzm = mobile => {
    return request.get(`/app/v1_0/sms/codes/${mobile}`)
}
