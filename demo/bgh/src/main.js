// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import MintUI from 'mint-ui'
import VueCookie from 'js-cookie'
import 'mint-ui/lib/style.css'

import wx from 'weixin-js-sdk'
import axios from 'axios'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import './styles/index.scss'

Vue.use(YDUI)


Vue.use(MintUI)

Vue.prototype.$ajax = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
