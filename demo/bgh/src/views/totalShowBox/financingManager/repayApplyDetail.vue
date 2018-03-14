<template>
	<!--还款申请确认并签署合同-->
  <div class="financing-apply repay-apply">
  	<yd-cell-group>
  		<div class="repay-top">
			<span class="xinhao">*</span><span>本页所计算金额为暂估金额，实际还款金额以保理公司审批完毕划转日为结息日，按日计息计算结果为准！</span>
		</div>
	  	<div class="card">
	  		<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">申请信息</span>
	            <span slot="right">
	            	<div>
			        	<yd-checkbox-group v-model="checkValue1">
					        <yd-checkbox val="1">部分还本金</yd-checkbox>
					        <yd-checkbox val="2">不同时还利息</yd-checkbox>
					    </yd-checkbox-group>
			        </div>
	            </span>
	        </yd-cell-item>
		    <yd-cell-item class="input-text">
	            <span slot="left">实还本金</span>
	            <yd-input slot="right" v-model="input4"  placeholder="请输入实还本金"></yd-input>
	       </yd-cell-item>
	  		
	  		<ul class="tab-ul">
	      		<li v-for="threeList in threeLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>账户余额</span>
	      				<span class="cell-right">{{threeList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>应还总金额</span>
	      				<span class="cell-right">{{threeList.two}}</span>
	      			</div>
	      			
	      			<div class="li-row">
	      				<span>应还保理费</span>
	      				<span class="cell-right">{{threeList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>实还利息</span>
	      				<span class="cell-right">{{threeList.five}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>应还罚息</span>
	      				<span class="cell-right">{{threeList.six}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>实还费用</span>
	      				<span class="cell-right">{{threeList.seven}}</span>
	      			</div>
	      		</li>
	      	</ul>
	  	</div>
	  	<div class="card">
	  		<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">费用信息</span>
	        </yd-cell-item>
	  		<ul class="tab-ul">
	      		<li v-for="twoList in twoLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>融资申请单号</span>
	      				<span class="cell-right">{{twoList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>计划还款日期</span>
	      				<span class="cell-right">{{twoList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>名称</span>
	      				<span class="cell-right">{{twoList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>付款方</span>
	      				<span class="cell-right">{{twoList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>前付/后付</span>
	      				<span class="cell-right">{{twoList.five}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>状态</span>
	      				<span class="cell-right">{{twoList.six}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>应还金额</span>
	      				<span class="cell-right">{{twoList.seven}}</span>
	      			</div>
	      		</li>
	      	</ul>
	  	</div>
	  	<div>
			<yd-button size="large" type="primary" @click.native="">提交</yd-button>
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
			checkOption1: ['部分还本金'],
			checkOption2: ['不同时还利息'],
			checkValue1: [],
			checkValue2: [],
			oneList: {
				one: 'Bgh0001',
				two: '保理池融资业务书.pdf',
				three: '保理池服务合同',
				four: '2018-01-10'
			},
			twoLists: [{
				one: 'RZSQ2017122909018000',
				two: '2018-12-29',
				three: '本金',
				four: '卖方',
				five: '后付',
				six: '正常',
				seven: '8,900.00'
			}],
			threeLists: [{	//申请信息
				one: '1256845.37',
				two: '8,900.00',
				three: '0.00',
				four: '0.00',
				five: '0.00',
				six: '0.00',
				seven: '0.00'
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


</style>