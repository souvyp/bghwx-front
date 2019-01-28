<template>
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div class="page-actionsheet">
			<div class="title-top">
				<div><span class="text">可融资金额</span></div>
				<div><span class="price">￥9,872.80</span></div>
				<div class="bottom">年化利率<span class="">10.0%</span></div>
			</div>
			<div class="repay">
				<yd-cell-item class="input-text">
					<span slot="left">申请融资金额</span>
					<span slot="right"></span>
				</yd-cell-item>
				<yd-cell-item class="input-text input-money">
					<span slot="left">￥</span>
					<yd-input slot="right"  v-model="form.applyAmount" placeholder="输入申请金额" ></yd-input>
				</yd-cell-item>
				<yd-cell-item arrow  @click.native="show2 = true">
					<span slot="left">还款方式</span>
					<span slot="right">{{form.repayModelCode}}</span>
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
				<yd-cell-item arrow  @click.native="repayDetail">
					<span slot="left">
						<div>
							<span class="text">还款计划</span>
							<span class="price"></span>
						</div>
					</span>
					<span slot="right"></span>
				</yd-cell-item>
				<yd-actionsheet :items="myItems2" v-model="show2"></yd-actionsheet>
			</div>
			<ul class="tab-ul">
	      		<li  class="tab-ul-li">
					  <div class="li-row">
	      				<span>收款账号</span>
	      				<span class="cell-right">102100010022</span>
	      			</div>
					<div class="li-row">
	      				<span>还款日</span>
	      				<span class="cell-right">每月02日</span>
	      			</div>
					<div class="li-row">
	      				<span>放款机构</span>
	      				<span class="cell-right">人民银行</span>
	      			</div>
	      		</li>
	       </ul>
	  	</div>
  	</yd-cell-group>
	<div v-if="form.applyAmount != ''" class="check">
		<yd-checkbox v-model="form.radioVal">本人已阅读并同意签署</yd-checkbox><span class="color-red" style="cursor: pointer;" @click="clickContract">《融资合同》</span>
	</div>
	<div class="footer">
		<yd-button v-if="form.applyAmount != '' && form.repayModelCode != '' && form.radioVal && form.verifyCode != ''" size="large" type="primary" @click.native="saveRepay">提交</yd-button>
		<yd-button v-else type="primary" size="large" disabled >提交</yd-button>
	</div>
  </div>
</template>
<script>
export default {
	data() {
		return {
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
	  setTitle('申请融资')
  },
  methods: {
	saveRepay() {

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