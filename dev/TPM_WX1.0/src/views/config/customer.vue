<template>
  <div class="financing-apply">
	  <div class="page-actionsheet">
		<div class="title">
			<div><span>客户信息</span></div>
		</div>
		<ul class="tab-ul">
			<li class="tab-ul-li tab-ul-li-list">
				<yd-cell-group>
					<yd-cell-item>
						<span slot="left">客户编码</span>
						<span slot="right">F001</span>
					</yd-cell-item>
					<yd-cell-item>
						<span slot="left">客户名称</span>
						<span slot="right">绥阳县旺草镇闽诚高速路物资供应商行</span>
					</yd-cell-item>
					<yd-cell-item>
						<span slot="left">客户地址</span>
						<span slot="right">贵州省遵义市绥阳县旺草镇尹珍社区三组</span>
					</yd-cell-item>
					<yd-cell-item>
						<span slot="left">联系人</span>
						<span slot="right">李炳诚</span>
					</yd-cell-item>
					<yd-cell-item>
						<span slot="left">联系电话</span>
						<span slot="right">13956502220</span>
					</yd-cell-item>
				</yd-cell-group>
			</li>
		</ul>
		<div class="title">
			<div><span>融资业务联系人</span></div>
		</div>
		<ul class="tab-ul">
			<li class="tab-ul-li tab-ul-li-list">
				<yd-cell-group>
					<yd-cell-item>
						<span slot="left">姓名</span>
						<span slot="right">李炳诚</span>
					</yd-cell-item>
					<yd-cell-item>
						<span slot="left">移动电话</span>
						<span slot="right">13956502220</span>
					</yd-cell-item>
				</yd-cell-group>
			</li>
		</ul>
	  </div>
	<!-- <div>
		<yd-button size="large" type="primary" @click.native="saveApply">提交</yd-button>
	</div>    -->
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
	  setTitle('客户信息')
	  window.scrollTo(0, 0);
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
	.title {
		margin: 11px 0 0 25px;
	}
</style>