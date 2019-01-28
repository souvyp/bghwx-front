<template>
	<!--融资申请-->
  <div class="financing-apply">
  	<yd-cell-group >
  		<div class="card">
	        <yd-cell-item>
	            <span slot="left">可融资金额</span>
	            <span slot="right">1111,555 元</span>
	        </yd-cell-item>
	  	</div>
  		<div class="card">
  			<yd-cell-item class="card-title" arrow>
	            <!-- <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png"> -->
	            <span slot="left">申请信息</span>
	        </yd-cell-item>	        
	        <yd-cell-item class="input-text">
	            <span slot="left"><span class="color-red">*</span>申请总金额</span>
	            <yd-input slot="right" v-model="form.applyAmount"  placeholder="请输入申请融资总金额" ></yd-input>
	        </yd-cell-item>
	        <yd-cell-item arrow  @click.native="show2 = true">
	            <span slot="left"><span class="color-red">*</span>还款方式</span>
	            <span slot="right">{{form.repayModelCode}}</span>
	        </yd-cell-item>
			<yd-cell-item>
	            <span slot="left">费率方式</span>
	            <span slot="right">年利率</span>
	        </yd-cell-item>
			<yd-cell-item>
	            <span slot="left">利息比率</span>
	            <span slot="right">100.00%</span>
	        </yd-cell-item>
			<yd-cell-item>
	            <span slot="left">保理费率</span>
	            <span slot="right">3.00%</span>
	        </yd-cell-item>
			<yd-cell-item>
	            <span slot="left">入账账号</span>
	            <span slot="right">102100010022</span>
	        </yd-cell-item>
			<yd-cell-item>
	            <span slot="left">前付|后付</span>
	            <span slot="right">后付</span>
	        </yd-cell-item>
			<yd-cell-item>
	            <span slot="left">还款日期</span>
	            <span slot="right">2018-12-06</span>
	        </yd-cell-item>
			<yd-cell-item>
	            <span slot="left">客户名称</span>
	            <span slot="right">xx超市板块</span>
	        </yd-cell-item>
			<yd-cell-item>
	            <span slot="left">联系用户</span>
	            <span slot="right">李炳诚</span>
	        </yd-cell-item>
	      	<yd-actionsheet :items="myItems2" v-model="show2"></yd-actionsheet>
		</div>
		<div class="card">
  			<yd-cell-item class="card-title" arrow>
	            <!-- <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png"> -->
	            <span slot="left">预览融资合同 <span style="color:#5cb9cd;cursor: pointer;" @click="clickContract">(点击预览)</span> </span>
	        </yd-cell-item>	
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
	            <span slot="left"><span class="color-red">*</span>验证码</span>
	            <yd-input slot="right" ref="verifyCode" v-model="form.verifyCode" placeholder="请输入验证码" ></yd-input>
	        </yd-cell-item>
		</div>
  	</yd-cell-group>
	<div>
		<yd-button size="large" type="primary" @click.native="saveApply">提交</yd-button>
	</div>   
  </div>
</template>
<script>
export default {
	data() {
		return {
			form: {
				verifyCode: '',
				applyAmount: '',
				repayModelCode: '请选择还款方式',
			},
			isFlag: true,
			start1: false,
			verifyCode: undefined,
			show2: false,
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
			oneList: {
				one: '2018-01-10',
				two: '1234567'
			},
			twoLists: [{
				one: '7.50',
				two: '卖方',
				three: '后付'
			}],
			threeLists: [{
				one: '卖方保理费',
				two: '卖方',
				three: '后付',
				four: '比例',
				five: '1.00'
			}],
			actions: [
			{
				name: '按季付息到期还本',
				method: ''
			},
			{
				name: '按月付息到期还本',
				method: ''
			},
			{
				name: '利随本清',
				method: ''
			}],
			second: 10,  // 计时
			isSecond: true,
		}
	},
  created() {
	  setTitle('申请融资')
  },
  methods: {
  	saveApply() {
		if (this.form.applyAmount == '') {
			this.$dialog.toast({mes: '请输入申请金额'})
			this.isFlag = false
			return false
		}
		if (this.form.verifyCode == '') {
			this.$dialog.toast({mes: '请输入验证码！'})
			this.isFlag = false
			return false
		}
		if (this.isFlag) {
			this.$router.push('/financing/loanApply/index')
		}
		console.log(222)
	},
	clickContract() {
		window.open(`http://10.0.4.23:8760/api/baoli/contract/previewTempContractFile/LOAN_CONTRACT-20181022210121-530be436-9148-459b-a677-8cdcfe0ac47c.pdf/LOAN_CONTRACT`)
	},
	getValidateCode() { // 获取验证码
        this.$dialog.loading.open('发送中...');
		setTimeout(() => {

			this.start1 = true;
			this.$dialog.loading.close();

			this.$dialog.toast({
				mes: '已发送',
				icon: 'success',
				timeout: 1500
			});

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
</style>