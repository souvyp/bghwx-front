<template>
	<!--还款计划查询-->
  <div class="receive-detail financing-apply">
  	<yd-cell-group>
  		<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="融资单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
	  		<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">还款计划信息  (单位：元)</span>
	        </yd-cell-item>
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>融资单号</span>
	      				<span class="cell-right">{{oneList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>计划还款日期</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>类型</span>
	      				<span class="cell-right">{{oneList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>名称</span>
	      				<span class="cell-right">{{oneList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>付款方</span>
	      				<span class="cell-right">{{oneList.five}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>前付/后付</span>
	      				<span class="cell-right">{{oneList.six}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>应还金额</span>
	      				<span class="cell-right">{{oneList.seven}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>已还金额</span>
	      				<span class="cell-right">{{oneList.eight}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>状态</span>
	      				<span class="cell-right">{{oneList.nine}}</span>
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
				one: 'RZSQ2017122909132000',
				two: '2017-12-29',
				three: '利息',
				four: '利息',
				five: '卖方',
				six: '后付',
				seven: '157.50',
				eight: '0.00',
				nine: '正常'
			},
			{
				one: 'RZSQ2017122909132000',
				two: '2017-12-29',
				three: '利息',
				four: '利息',
				five: '卖方',
				six: '后付',
				seven: '157.50',
				eight: '0.00',
				nine: '正常'
			}]
		}
	},
  created() {
  },
  methods: {
  	signContract() {
  		this.$router.push('/queryManager/finaQuerySignContract')
  	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>