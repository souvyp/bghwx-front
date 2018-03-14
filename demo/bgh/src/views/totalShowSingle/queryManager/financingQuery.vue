<template>
	<!--融资查询(单)-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="出账单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class=" page-actionsheet">
	  		<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">融资信息  (单位：元)</span>
	        </yd-cell-item>
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>融资申请单号</span>
	      				<span class="cell-right">{{oneList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>借款合同号</span>
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
	      				<span>融资日期</span>
	      				<span class="cell-right">{{oneList.five}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>实付金额</span>
	      				<span class="cell-right">{{oneList.six}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>已还款本金</span>
	      				<span class="cell-right">{{oneList.seven}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>待还款本金</span>
	      				<span class="cell-right">{{oneList.eight}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>状态</span>
	      				<span class="cell-right">{{oneList.nine}}</span>
	      			</div>
	      			<!--<div class="li-row">
	      				<span class="cell-right" >
	      					<yd-button  type="primary" @click.native="signContract">查看详情</yd-button>
	      				</span>
					</div> -->
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
				three: '2017-12-27 10:38',
				four: '7,900.00',
				five: '2017-12-29',
				six: '7,039.17',
				seven: '0.00',
				eight: '7,900.00',
				nine: '划转成功'
			},
			{
				one: 'RZSQ2017122909132000',
				two: 'BLHT201702791',
				three: '2017-12-27 10:38',
				four: '7,900.00',
				five: '2017-12-29',
				six: '7,039.17',
				seven: '0.00',
				eight: '7,900.00',
				nine: '划转成功'
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