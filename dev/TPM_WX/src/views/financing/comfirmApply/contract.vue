<template>
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div class="page-actionsheet">
			<div class="title-top">
				<div><span class="text">申请金额</span></div>
				<div><span class="price">￥160,000.80</span></div>
				<div class="bottom">年化利率<span class="">10.0%</span></div>
			</div>
			<div class="card" v-show="isFinance">
				<yd-cell-item>
					<yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
					<input type="text" slot="right" placeholder="请输入手机号码" disabled value="15576456475">
					<yd-sendcode slot="right" 
								v-model="start1" 
								@click.native="getValidateCode" 
								type="warning"
					></yd-sendcode>
				</yd-cell-item>
				<yd-cell-item class="input-text">
					<span slot="left">验证码</span>
					<yd-input slot="right"  v-model="form.verifyCode" placeholder="请输入验证码" ></yd-input>
				</yd-cell-item>
			</div>
	  	</div>
  	</yd-cell-group>

	<div v-show="isFrame">
		<div class="check">
			<yd-checkbox v-model="form.radioVal">本人已阅读并同意签署</yd-checkbox><span class="color-red" style="cursor: pointer;" @click="clickContract">《框架合同》</span>
		</div>
		<div class="footer">
			<yd-button v-if="form.radioVal" size="large" type="primary" @click.native="signFrame">下一步</yd-button>
			<yd-button v-else type="primary" size="large" disabled >下一步</yd-button>
		</div>
	</div>
	<div v-show="isFinance">
		<div class="check">
			<yd-checkbox v-model="form.radioVal">本人已阅读并同意签署</yd-checkbox><span class="color-red" style="cursor: pointer;" @click="clickContract">《融资合同》</span>
		</div>
		<div class="footer">
			<yd-button v-if="form.radioVal && form.verifyCode" size="large" type="primary" @click.native="signFinance">提交</yd-button>
			<yd-button v-else type="primary" size="large" disabled >提交</yd-button>
		</div>
	</div>
	
  </div>
</template>
<script>
export default {
	data() {
		return {
			isFrame: true,
			isFinance: false,
			form: {
				applyAmount: '9,782.80',
				repayModelCode: '按月付息到期还本',
				radioVal: false,
				verifyCode: '',
			},
			show2: false,
			start1: false,
			myItems2: [
                {
					label: '按季付息到期还本',
					value: 1,
                    callback: () => {
                        this.form.repayModelCode = '按季付息到期还本'
                    }
                },
                {
					label: '按月付息到期还本',
					value: 2,
                    callback: () => {
                        this.form.repayModelCode = '按月付息到期还本'
                    }
                },
                {
					label: '利随本清',
					value: 3,
                    callback: () => {
                        this.form.repayModelCode = '利随本清'
                    }
                }
            ],
		}
	},
  created() {
	  setTitle('签署合同')
  },
  methods: {
	signFrame() {
		this.isFrame = false
		this.isFinance = true
	},
	signFinance() {
		// this.$router.push('/financing/comfirmApply/index')
	},
	repayDetail() {
		this.$router.push('/search/repayment/detail')
	},
	clickContract() {
		window.open(`http://10.0.4.23:8760/api/baoli/contract/previewTempContractFile/LOAN_CONTRACT-20181022210121-530be436-9148-459b-a677-8cdcfe0ac47c.pdf/LOAN_CONTRACT`)
	},
	repayDetail() {
		this.$router.push('/financing/loanApply/plan')
	},
	getValidateCode() { // 获取验证码
		this.$dialog.toast({
				mes: '已发送',
				icon: 'success',
				timeout: 1500
			});
		setTimeout(() => {
			this.start1 = true;
			this.$dialog.loading.close()
		}, 1000);
	},
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
	.tab-ul {
		.text {
			color: #a9a9a9;
		}
		.price {
			display: block;
		}
	}
	.repay {
		background: #fff;
    	border-bottom: 1px solid #fcf9fe;
	}
	.check {
		margin: 20px 0;
    	text-align: center;
	}
	.yd-checkbox {
		padding: 0 !important;
	}
	
</style>