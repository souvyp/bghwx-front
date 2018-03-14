/* 公用方法插件 */
import { Loading } from 'element-ui'
export default {
  install: function(Vue, options) {
    Vue.prototype.$loadingIndex = undefined
    /* 服务组 用于添加全局方法 */
    Vue.prototype.$common = {
      // 判断字符串为空
      isNull: function(val) {
        return val === undefined || val === null || val === ''
      },
      isSuccess: function(resultCode) {
        return resultCode === '000'
      }
    }

    /* START 公用提示方法 */
    // 成功
    Vue.prototype.$success = function(message) {
      this.$notify({
        title: '成功',
        message: this.$common.isNull(message) ? '操作成功' : message,
        type: 'success',
        duration: 2000
      })
    }
    // 失败
    Vue.prototype.$error = function(message) {
      this.$notify({
        title: '失败',
        message: this.$common.isNull(message) ? '操作失败' : message,
        type: 'error',
        duration: 2000
      })
    }
    // 警告
    Vue.prototype.$warning = function(message) {
      this.$notify({
        title: '警告',
        message: this.$common.isNull(message) ? '注意警告' : message,
        type: 'warning',
        duration: 2000
      })
    }
    // 提示
    Vue.prototype.$info = function(message) {
      this.$notify({
        title: '提示',
        message: this.$common.isNull(message) ? '友情提示' : message,
        type: 'info',
        duration: 2000
      })
    }
    /* END 公用提示方法 */

    /* 全局遮罩开启 */
    Vue.prototype.$loadingOpen = function(text) {
      this.$loadingIndex = Loading.service({ fullscreen: true, text: this.$common.isNull(text) ? '努力加载中' : text })
    }
    /* 全局遮罩关闭 */
    Vue.prototype.$loadingClose = function() {
      this.$loadingIndex.close()
    }

    /* 校验按钮是否有权限 */
    Vue.prototype.$filterBtn = function(perm) {
      if (this.$common.isNull(perm)) {
        return true
      } else {
        const userBtnPerms = sessionStorage.getItem('userBtnPerms')
        if (userBtnPerms === undefined || userBtnPerms.length === 0) {
          return false;
        }
        return userBtnPerms.indexOf('"' + perm + '"') > -1
      }
    }
  }
}
