<template>
	<!--还款查询-->
  <div class="financing-apply">
  	<yd-cell-group>
  		<div>
  			<yd-search v-model="value" :on-submit="submitHandler"  placeholder="融资单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class=" page-actionsheet">
	  		<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">还款申请信息  (单位：元)</span>
	        </yd-cell-item>
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>还款申请单号</span>
	      				<span class="cell-right">{{oneList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资申请单号</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资单号</span>
	      				<span class="cell-right">{{oneList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>币种</span>
	      				<span class="cell-right">{{oneList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请金额</span>
	      				<span class="cell-right">{{oneList.five}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请时间</span>
	      				<span class="cell-right">{{oneList.six}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>状态</span>
	      				<span class="cell-right">{{oneList.seven}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请人</span>
	      				<span class="cell-right">{{oneList.eight}}</span>
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
				two: 'BLHT201702791',
				three: 'BLHT201702791',
				four: 'RMB',
				five: '7,039.17',
				six: '2017-12-29',
				seven: '申请中',
				eight: '陈梅'
			},
			{
				one: 'RZSQ2017122909132000',
				two: 'BLHT201702791',
				three: 'BLHT201702791',
				four: 'RMB',
				five: '7,039.17',
				six: '2017-12-29',
				seven: '申请中',
				eight: '陈梅'
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