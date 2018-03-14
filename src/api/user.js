import fetch from './fetch'

const userService = {}

userService.login = function (params) {
  return fetch({
    url: 'users/login',
    method: 'post',
    data: params
  })
}

userService.addUser = function (params) {
  return fetch({
    url: 'users',
    method: 'post',
    data: params
  })
}

userService.getUserList = function (params) {
  return fetch({
    url: 'users',
    method: 'get',
    data: params
  })
}

userService.getUserInfo = function (params) {
  return fetch({
    url: 'user/' + params.userId,
    method: 'get'
  })
}

// 获取验证码
/*
 params = {
   phone: 15629089288
 }
*/
userService.getVerificationCode = function (params) {
  return fetch({
    url: 'users/get-verification-code',
    method: 'post',
    data: params
  })
}

// 注册用户
/*
 params = {
   userName: liuim,
   password: 123213,
   phone: 15629089288,
   code: 13213
 }
*/
userService.signUp = function (params) {
  return fetch({
    url: 'users/sign-up',
    method: 'post',
    data: params
  })
}

export default userService
