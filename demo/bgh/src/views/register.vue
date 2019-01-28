<template>
  <div class="register">
	<div class="one" v-show="one">
		<span class="title">我们将发送验证码到你的手机。</span>
		<yd-cell-group >
			<div class="card">
				<yd-cell-item>
					<span slot="left" style="padding-right: 10px;">手机号</span>
					<input type="text" slot="right" placeholder="请填写注册手机号" v-model="form.mobile">
				</yd-cell-item>
			</div>
		</yd-cell-group>
		<div class="footer">
			<yd-button v-if="form.mobile != ''" size="large" type="primary" @click.native="handleNext">下一步</yd-button>
			<yd-button v-else size="large" type="primary" disabled>下一步</yd-button>
			<div style="margin-top:20px;">
				<span>已有账号?</span>
				<yd-button size="small" type="primary" @click.native="handleLog">登录</yd-button>
			</div>
		</div>   
	</div>
	<div class="one" v-show="two">
		<span class="title">验证短信已发送至 155 7596 9435</span>
		<yd-cell-group >
			<div class="card">
				<yd-cell-item>
					<span slot="left" style="padding-right: 10px;">邀请码</span>
					<input type="text" slot="right" placeholder="邀请码" v-model="form.invalidCode">
				</yd-cell-item>
				<yd-cell-item>
					<span slot="left" style="padding-right: 10px;">验证码</span>
					<input type="text" slot="right" v-model="form.verifyCode" placeholder="短信验证码" >
					<yd-sendcode slot="right" 
								v-model="start1" 
								@click.native="getValidateCode" 
								type="warning"
					></yd-sendcode>
				</yd-cell-item>
			</div>
		</yd-cell-group>
		<div class="footer">
			<yd-button v-if="form.invalidCode != '' && form.verifyCode != ''" size="large" type="primary" @click.native="handleRegister">注册</yd-button>
			<yd-button v-else size="large" type="primary" disabled>注册</yd-button>
			<!-- <div style="margin-top:20px;">
				<span>注册即视为同意<span>《服务条款》</span></span>
			</div> -->
		</div>   
	</div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			one: true,
			two: false,
			form: {
				verifyCode: '',
				mobile: '',
				invalidCode: '',
			},
			isFlag: true,
			start1: false,
		}
	},
  created() {
	  setTitle('注册')
  },
  methods: {
	handleLog() {
		this.$router.push('/')
	},
	handleRegister() {
		if (this.form.invalidCode == '') {
			this.$dialog.toast({mes: '请填写邀请码'})
			this.isFlag = false
			return false
		}
		if (this.form.verifyCode == '') {
			this.$dialog.toast({mes: '请填写短信验证码'})
			this.isFlag = false
			return false
		}
		if (this.isFlag) {
			this.$router.push('/')
		}
	},
	handleNext() {
		if (this.form.mobile == '') {
			this.$dialog.toast({mes: '请填写注册手机号'})
			this.isFlag = false
			return false
		}
		if (this.isFlag) {
			this.one = false
			this.two = true
			this.$dialog.toast({
				mes: '已发送',
				icon: 'success',
				timeout: 1500
			});
			this.getValidateCode()
		}
		
	},
	getValidateCode() { // 获取验证码
		setTimeout(() => {
			this.start1 = true;
			this.$dialog.loading.close()
		}, 1000);
	},
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
	.contract {
		padding: 0.2rem;
		text-align: center;
	}
	.footer {
		text-align: right;
    	margin: 0 10px;
	}
	.yd-cell {
		margin: 20px 0;
	}
	.one {
		margin-top: 20px;
		.title {
			display: inline-block;
			margin: 0px 0px 5px 18px;
			font-size: .2rem;
			color: #999;
			letter-spacing: 0.02rem;
		}
	}
</style>