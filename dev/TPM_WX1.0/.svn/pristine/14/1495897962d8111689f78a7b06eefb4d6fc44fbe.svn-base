import fetch from '@/utils/fetch'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    url: '/jwt/token',
    method: 'post',
    data
  })
}

export function logout(token) {
  return fetch({
    url: '/jwt/logout',
    method: 'get',
    params:{ token }
  })
}

export function getUserInfo(token) {
  return fetch({
    url: '/jwt/user',
    method: 'get',
    params: { token }
  })
}

export function getObj(url) {
  return fetch({
    url: url,
    method: 'get'
  })
}
