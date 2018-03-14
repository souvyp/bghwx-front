<template>
	<!--融资申请(单)-->
  <div class="financing-apply sigle-apply">
  	<yd-cell-group>
  		<div>
  			<yd-search v-model="value" :on-submit="submitHandler"  placeholder="应收单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>应收单号</span>
	      				<span class="cell-right">{{oneList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>业务期间</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>到期日</span>
	      				<span class="cell-right">{{oneList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>应收金额</span>
	      				<span class="cell-right">{{oneList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>电票金额</span>
	      				<span class="cell-right">{{oneList.five}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>可融资金额</span>
	      				<span class="cell-right">{{oneList.six}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资状态</span>
	      				<span class="cell-right">{{oneList.seven}}</span>
	      			</div>
	      			<div class="list-footer">
	      				<span>
	      					<yd-checkbox v-model="value">{{oneList.one}}</yd-checkbox>
	      				</span>
	      				<span>
	      					<yd-button  type="primary" @click.native="signContract">申请融资</yd-button>
	      				</span>	
	      			</div>
	      		</li>
	      </ul>
	  	</div>
	  	<div class="btn-footer">
	  		<yd-button  size="large" type="primary" @click.native="signContract">批量融资</yd-button>
	  	</div>
  	</yd-cell-group>
  	
  </div>
</template>
<script>
export default {
	data() {
		return {
			oneLists: [{
				one: 'CJS1705002555',
				two: '2017-05-31',
				three: '2018-09-08',
				four: '15,678.00',
				five: '0.00	',
				six: '15,678.00',
				seven: '未出账'
			},
			{
				one: 'CJS1705002555',
				two: '2017-05-31',
				three: '2018-09-08',
				four: '15,678.00',
				five: '0.00	',
				six: '15,678.00',
				seven: '未出账'
			}],
			value: [],
			options: ['CJS1705002555']
		}
	},
  created() {
  },
  methods: {
  	signContract() {
  		this.$router.push('/totalShowSingle/financingSignInfo')
  	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
	
</style>