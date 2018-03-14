<template>
	<!--确认并签署合同-->
  <div class="receive-detail financing-sign">
  	<div class="card page-actionsheet">
  		<mt-cell title="合同信息"></mt-cell>
		<ul class="tab-ul">
      		<li class="tab-ul-li">
      			<div class="li-row">
      				<span>合同编号</span>
      				<span class="cell-right">
      					<a href="../../aaa.xlsx" >{{oneList.one}}</a>
      				</span>
      			</div>
      			<div class="li-row">
      				<span>合同名称</span>
      				<span class="cell-right">{{oneList.two}}</span>
      			</div>
      			<div class="li-row">
      				<span>合同类型</span>
      				<span class="cell-right">{{oneList.three}}</span>
      			</div>
      			<div class="li-row">
      				<span>合同创建时间</span>
      				<span class="cell-right">{{oneList.four}}</span>
      			</div>
      		</li>
        </ul>
      <mt-actionsheet :actions="actions" v-model="sheetVisible" cancel-text=""></mt-actionsheet>
  	</div>
  	<div class="card">
  		<mt-cell title="合同签章"></mt-cell>
  		<form class="form-validate">
  			<ul class="tab-ul">
	      		<li v-for="twoList in twoLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>手机号</span>
	      				<span class="cell-right">{{twoList.one}}</span>
	      			</div>
	      			<div class="li-row row-validate">
	      				<mt-field label="验证码" placeholder="请输入验证码" type="text"></mt-field>
	      				<mt-button size="small" >发送(60s)</mt-button>
	      			</div>
	      			<div>
						 <mt-checklist class="page-part" value="checkValue" :options="checkOption">
						</mt-checklist>
					</div>
					<div>
						<mt-button  type="primary" size="large">确定并签章</mt-button>
					</div> 
	      		</li>
	      	</ul>
  		</form>
  	</div>
  	<div class="card">
  		<mt-cell title="申请信息"></mt-cell>
  		<ul class="tab-ul">
      		<li v-for="threeList in threeLists" class="tab-ul-li">
      			<div class="li-row">
      				<span>经办人</span>
      				<span class="cell-right">{{threeList.one}}</span>
      			</div>
      			<div class="li-row">
      				<span>发起时间</span>
      				<span class="cell-right">{{threeList.two}}</span>
      			</div>
      			<div class="li-row">
      				<span>融资单号</span>
      				<span class="cell-right">{{threeList.three}}</span>
      			</div>
      			<div class="li-row">
      				<span>申请融资金额</span>
      				<span class="cell-right">{{threeList.four}}</span>
      			</div>
      			<div class="li-row">
      				<span>融资入账账号</span>
      				<span class="cell-right">{{threeList.five}}</span>
      			</div>
      			<div class="li-row">
      				<span>融资入账账号开户行</span>
      				<span class="cell-right">{{threeList.six}}%</span>
      			</div>
      			<div class="li-row">
      				<span>还款账号</span>
      				<span class="cell-right">{{threeList.seven}}%</span>
      			</div>
      			<div class="li-row">
      				<span>实付金额</span>
      				<span class="cell-right">{{threeList.eight}}%</span>
      			</div>
      			<div class="li-row">
      				<span>还款方式</span>
      				<span class="cell-right">{{threeList.nine}}%</span>
      			</div>
      			<div class="li-row">
      				<span>还款到期日</span>
      				<span class="cell-right">{{threeList.ten}}%</span>
      			</div>
      		</li>
      	</ul>
  	</div>
  	<div class="card">
  		<mt-cell title="利息信息"></mt-cell>
  		<ul class="tab-ul">
      		<li v-for="fourList in fourLists" class="tab-ul-li">
      			<div class="li-row">
      				<span>利率</span>
      				<span class="cell-right">{{fourList.one}}%</span>
      			</div>
      			<div class="li-row">
      				<span>付款方</span>
      				<span class="cell-right">{{fourList.two}}</span>
      			</div>
      			<div class="li-row">
      				<span>前付/后付</span>
      				<span class="cell-right">{{fourList.three}}</span>
      			</div>
      		</li>
      	</ul>
  	</div>
  	<div class="card">
  		<mt-cell title="费用信息"></mt-cell>
  		<ul class="tab-ul">
      		<li v-for="fiveList in fiveLists" class="tab-ul-li">
      			<div class="li-row">
      				<span>费用名称</span>
      				<span class="cell-right">{{fiveList.one}}</span>
      			</div>
      			<div class="li-row">
      				<span>付款方</span>
      				<span class="cell-right">{{fiveList.two}}</span>
      			</div>
      			<div class="li-row">
      				<span>前付/后付</span>
      				<span class="cell-right">{{fiveList.three}}</span>
      			</div>
      			<div class="li-row">
      				<span>收费方式</span>
      				<span class="cell-right">{{fiveList.four}}</span>
      			</div>
      			<div class="li-row">
      				<span>值</span>
      				<span class="cell-right">{{fiveList.five}}%</span>
      			</div>
      		</li>
      	</ul>
  	</div>
	  
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