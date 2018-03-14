<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
  		<div class="">
	  		<ul class="tab-ul">
	      		<li class="tab-ul-li">
	      			<div class="li-row">
	      				<span>融资申请总金额</span>
	      				<span class="cell-right">{{data.one}}元</span>
	      			</div>
	      			<div class="li-row">
	      				<span>实付总金额</span>
	      				<span class="cell-right">{{data.two}}元</span>
	      			</div>
	      		</li>
	        </ul>
	  	</div>
	  	<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="出账单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>融资单号</span>
	      				<span class="cell-right">{{oneList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请人</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请日期</span>
	      				<span class="cell-right">{{oneList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请融资金额</span>
	      				<span class="cell-right">{{oneList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>实付金额</span>
	      				<span class="cell-right">{{oneList.five}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>状态</span>
	      				<span class="cell-right">{{oneList.six}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span class="cell-right" >
	      					<yd-button  type="primary" @click.native="signContract">签章</yd-button>
	      				</span>
					</div> 
	      		</li>
	       </ul>
	  	</div>
  	</yd-cell-group>
  </div>
</template>
<script>
export default {
	data() {
		return {
			data: {
				one: '13,000.00',
				two: '12,820.00	'
			},
			oneLists: [{
				one: 'RZSQ2017122710119000',
				two: '陈家全',
				three: '2017-12-27 10:38',
				four: '13,000.00',
				five: '12,820.00',
				six: '待签署'
			},
			{
				one: 'RZSQ2017122710119000',
				two: '陈家全',
				three: '2017-12-27 10:38',
				four: '13,000.00',
				five: '12,820.00',
				six: '待签署'
			}]
		}
	},
  created() {
  },
  methods: {
  	signContract() {
  		this.$router.push('/financingManager/finaAgentApplyInfo')
  	},
  	submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
    }
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>