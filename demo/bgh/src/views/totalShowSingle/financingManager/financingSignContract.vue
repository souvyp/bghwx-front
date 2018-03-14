<template>
	<!--确认并签署合同（单）-->
  <div class="financing-apply apply-contract">
  	<yd-cell-group>
  		<div class="card">
  			<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">合同签章</span>
	        </yd-cell-item>
	        <yd-cell-item>
	            <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
	            <input type="text" slot="right" placeholder="请输入手机号码">
	
	            <!-- ↓↓关键代码是这里↓↓ -->
	            <yd-sendcode slot="right" 
	                         v-model="start1" 
	                         @click.native="sendCode1" 
	                         type="warning"
	            ></yd-sendcode>
	            <!-- ↑↑关键代码是这里↑↑ -->
	        </yd-cell-item>
	        <yd-cell-item>
	            <yd-input slot="right" v-model="input4" regex="mobile" placeholder="请输入手机验证码"></yd-input>
	        </yd-cell-item>
	        <div class="div-check">
  				<yd-checkbox v-model="checkValue">本次融资申请是贵公司本年首次申请。按照协议约定，需要支付200元证书及电子签章费用。费用将由华联保理公司出账划转时代扣。</yd-checkbox>
			</div>
			<div class="btn-footer">
				<yd-button  size="large" type="primary">确定并签章</yd-button>
			</div> 
	  	</div>
  	</yd-cell-group>
	  
  </div>
</template>
<script>
export default {
	data() {
		return {
			sheetVisible: false,
			checkOption: ['本次融资申请是贵公司本年首次申请。按照协议约定，需要支付200元证书及电子签章费用。费用将由华联保理公司出账划转时代扣。'],
			checkValue: [],
			oneList: {
				one: 'Bgh0001',
				two: '保理池融资业务书.pdf',
				three: '保理池服务合同',
				four: '2018-01-10'
			},
			twoLists: [{
				one: '15801891112'
			}],
			threeLists: [{	//申请信息
				one: '陈梅',
				two: '2018-08-08',
				three: '111111',
				four: '1111111',
				five: '11111',
				six: '平安银行',
				seven: '11111',
				eight: '11111',
				nine: '按季付息到期还本',
				ten: '2019-09-09'
			}],
			fourLists: [{	//利息信息
				one: '7.50',
				two: '卖方',
				three: '后付'
			}],
			fiveLists: [{
				one: '卖方保理费',
				two: '卖方',
				three: '后付',
				four: '比例',
				five: '1.00'
			}],
		}
	},
  created() {
  },
  methods: {
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
.financing-sign {
	.row-validate {
		display: inline-flex;
	}
	.btn-validate {
		text-align: center;
	}
	.mint-button--small {
		margin-left: 20px;
	}
}
</style>