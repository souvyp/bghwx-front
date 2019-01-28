import Cookies from 'js-cookie'
import { Loading } from 'element-ui'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function LoadingOpen() {
  return Loading.service({ fullscreen: true, text: '加载中'})
}

export function LoadingClose(index) {
  index.close()
}
