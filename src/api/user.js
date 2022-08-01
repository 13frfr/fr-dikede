import request from '@/utils/request'

/**
 * 登录请求
 * @param {Object} data mobile password
 * @returns promise
 */
export function login(data) {
    return request({
        url:'/api/user-service/user/login',
        method: 'POST',
        data
    })
}

/**
 * 图片验证码
 * @returns promise
 */
export function logincode(clientToken){
    return request({
        url:`/api/user-service/user/imageCode/${clientToken}`,
        responseType:'blob'
    })
}
