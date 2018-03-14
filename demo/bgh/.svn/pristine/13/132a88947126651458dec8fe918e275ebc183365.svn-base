<template>
	<!--还款申请(单)-->
  <div class="receive-detail financing-apply">
  	<yd-cell-group>
  		<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="融资单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class=" page-actionsheet">
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>融资单号</span>
	      				<span class="cell-right">{{oneList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资申请单号</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资日期</span>
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
	      				<span>已还本金</span>
	      				<span class="cell-right">{{oneList.six}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>待还本金</span>
	      				<span class="cell-right">{{oneList.seven}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>到期时间</span>
	      				<span class="cell-right">{{oneList.eight}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span class="cell-right" >
	      					<yd-button  type="primary" @click.native="signContract">申请还款</yd-button>
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
				two: 'RZSQ2017122710119000',
				three: '2017-12-27',
				four: '13,000.00',
				five: '12,820.00',
				six: '0.00',
				seven: '8,900.00',
				eight: '20180-12-29'
			},
			{
				one: 'RZSQ2017122710119000',
				two: 'RZSQ2017122710119000',
				three: '2017-12-27',
				four: '13,000.00',
				five: '12,820.00',
				six: '0.00',
				seven: '8,900.00',
				eight: '20180-12-29'
			}]
		}
	},
  created() {
  },
  methods: {
  	signContract() {
  		this.$router.push('/totalShowSingle/repayApplyDetail')
  	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>