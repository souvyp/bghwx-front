<template>
  <div class="app-container">
  	<form class="form-login">
		<yd-cell-group>
			<yd-cell-item class="row-user">
				<yd-input slot="right" v-model="userName"  placeholder="用户名/绑定手机号"></yd-input>
			</yd-cell-item>
			<yd-cell-item class='row-pwd'>
				<yd-input slot="right" type="password" v-model="userPwd" placeholder="登录密码"></yd-input>
			</yd-cell-item>

		</yd-cell-group>
		<div class="footer">
			<yd-button size="large" type="primary" @click.native="handleLogin">登录</yd-button>
			<div class="page-footer">
				<div>
					<span>还没有账号？<span class="color-green" @click="handleReg">立即免费注册</span></span>
				</div>
				<!-- <div>
					<span  @click.native="handleReg">立即免费注册</span>
				</div> -->
				<!-- <yd-button size="large" type="primary" @click.native="handleReg">立即免费注册</yd-button> -->
			</div>
		</div>
		
  	</form>
	
  </div>
</template>

<script>
import * as index from '@/api/index'
export default {
  name: 'login',
  data () {
    return {
       userName: undefined,
       userPwd: undefined
    }
  },
  created() {
	  setTitle('登录')
	  //this.loginHandle()
	  //this.createMenu()
	  //window.scrollTo(0, 0);
  },
  methods: {
	handleReg() {
		this.$router.push('/register')
	},
	handleLogin() {
		this.$router.push('/financing/loanApply/index')
	},
	loginHandle() {
		console.log(3333)
		// this.$HttpGet(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9e5cebeb227e21c0&secret=7330cc05f3eca43e0502d4e6dbcfbd3d`).then(res => {

		// })
		// let _listParam = {
		// 	grant_type: 'client_credential',
		// 	appid: 'wx9e5cebeb227e21c0',
		// 	secret: '7330cc05f3eca43e0502d4e6dbcfbd3d'
		// }
		index.getObj(`/cgi-bin/token?grant_type=client_credential&appid=wx9e5cebeb227e21c0&secret=7330cc05f3eca43e0502d4e6dbcfbd3d`)
		.then(response => {
			this.access_token = response.data.access_token
		})
	},
	createMenu() {
		this.access_token = '15_MhB-AqZu-M2f09pSG8nrO1zkYnYnC5USkQxy_Igw4JMCDu4UzLWAhIAT_L8kz6ZCKDunzrX37gZqr0yCyDAOWRycSvE1_PTYiOscgBvTNJdlAux-3JdT449uuKsXM1vrbP8vNY8bLu399ga1KDHbAJAQJN'
		
		let locahost = `http://g45wie.natappfree.cc/?#`
		let dataStrBox = `{
							"button": [
								{
									"name": "融资办理", 
									"sub_button": [
										{
											"type": "view", 
											"name": "融资申请", 
											"url": "${locahost}/financing/loanApply/index"
										},
										{
											"type": "view", 
											"name": "还款申请", 
											"url": "${locahost}/financing/repayApply/index"
										},
										{
											"type": "view", 
											"name": "待确认申请", 
											"url": "${locahost}/financing/comfirmApply/index"
										}
									]
								},
								{
									"name": "融资查询", 
									"sub_button": [
										{
											"type": "view", 
											"name": "融资查询", 
											"url": "${locahost}/search/loan/index"
										}, 
										{
											"type": "view", 
											"name": "还款查询", 
											"url": "${locahost}/search/repayment/index"
										},
										{
											"type": "view", 
											"name": "对账查询", 
											"url": "${locahost}/search/account/index"
										},
										{
											"type": "view", 
											"name": "合同查询", 
											"url": "${locahost}/search/contract/index"
										}
									]
								},
								{
								 	"name": "配置管理", 
								 	"sub_button": [
								 		{
								 			"type":"view",
								 			"name":"登录",
								 			"url": "${locahost}"
								 		},
								 		{
								 			"type": "view", 
								 			"name": "融资账号", 
								 			"url": "${locahost}/config/account"
								 		}, 
										{
								 			"type": "view", 
								 			"name": "客户信息", 
								 			"url": "${locahost}/config/customer"
								 		}
								 	]
								 }
							]
						}`
		
		let _data = `{
							"button": [{
								 			"type":"view",
								 			"name":"登录",
								 			"url": "${locahost}"
										 }]
										 }`
		index.putObj(dataStrBox, `/cgi-bin/menu/create?access_token=${this.access_token}`)
		.then(response => {})						 
	},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
