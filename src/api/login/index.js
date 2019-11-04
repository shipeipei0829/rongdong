import request from '@/api/request'

/**
 * 发送验证码参数
 * 手机号
 * @param phoneNumber
 */
export const getYzmCode = ({phoneNumber}) => {
  const params = {phoneNumber: phoneNumber}

  return request({
    url: 'msg/sendVerificationCode',
    params,
    method: 'get'
  })
}        
/**
 * 注册下一步
 * 手机号 验证码
 * @param phone
 * @param yzm
 */
export const subzhuce = ({phone,yzm}) => {
  const params = {phoneNumber: phone,verificationCode:yzm}

  return request({
    url: 'msg/checkVerificationCode',
    params,
    method: 'post'
  })
}

/**
 * 注册 设置密码
 * 手机号 密码
 * @param phone
 * @param password
 */
export const setpassword = ({phone,password,type,nickName}) => {
  const params = {account: phone, password:password,accountType:type,nickName:nickName}
  return request({
    url: 'base/account/register/registerUser',
    params,
    method: 'post'
  })
}




/**
 * 登录
 * 账号 密码
 * @param user
 * @param pswd
 */
export const subregister = ({username,password}) => {

  const params = {username: username,password:password}

  return request({
    url: 'auth/login/token',
    params,
    method: 'post'
  })
}

