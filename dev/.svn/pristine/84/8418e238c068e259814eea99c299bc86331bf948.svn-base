import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_production')
Vue.use(Router)

export default new Router({
//	mode: 'history',
  routes: [
    {
      path: '/',
      name: '登录',
      component: _import('login')
    },
    {
      path: '/register',
      name: '注册',
      component: _import('register')
    },
    //  融资申请
    {
      path: '/financing/loanApply/index',
      name: '融资申请',
      component: _import('financing/loanApply/index')
    },
    {
      path: '/financing/loanApply/apply',
      name: '融资申请',
      component: _import('financing/loanApply/apply')
    },
    {
      path: '/financing/loanApply/plan',
      name: '还款计划',
      component: _import('financing/loanApply/plan')
    },
    {
      path: '/financing/repayApply/index',
      name: '还款申请',
      component: _import('financing/repayApply/index')
    },
    {
      path: '/financing/repayApply/apply',
      name: '还款申请',
      component: _import('financing/repayApply/apply')
    },
    {
      path: '/financing/repayApply/plan',
      name: '还款详情',
      component: _import('financing/repayApply/plan')
    },
    {
      path: '/financing/repayApply/repay',
      name: '还款金额',
      component: _import('financing/repayApply/repay')
    },
    {
      path: '/financing/comfirmApply/index',
      name: '待确认申请',
      component: _import('financing/comfirmApply/index')
    },
    {
      path: '/financing/comfirmApply/contract',
      name: '签署合同',
      component: _import('financing/comfirmApply/contract')
    },
    {
      path: '/search/loan/index',
      name: '融资查询',
      component: _import('search/loan/index')
    },
    {
      path: '/search/loan/detail',
      name: '融资详情',
      component: _import('search/loan/detail')
    },
    {
      path: '/search/loan/plan',
      name: '融资计划',
      component: _import('search/loan/plan')
    },
    {
      path: '/search/repayment/index',
      name: '还款查询',
      component: _import('search/repayment/index')
    },
    {
      path: '/search/repayment/detail',
      name: '还款详情',
      component: _import('search/repayment/detail')
    },
    {
      path: '/search/account/index',
      name: '对账查询',
      component: _import('search/account/index')
    },
    {
      path: '/search/contract/index',
      name: '合同查询',
      component: _import('search/contract/index')
    },
    {
      path: '/config/account',
      name: '融资账号',
      component: _import('config/account')
    },
    {
      path: '/config/customer',
      name: '客户信息',
      component: _import('config/customer')
    }
  ]
})
