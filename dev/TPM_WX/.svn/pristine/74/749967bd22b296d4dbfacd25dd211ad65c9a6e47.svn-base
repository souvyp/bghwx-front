<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="交易编号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" :key="oneList.one" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>交易编号</span>
	      				<span class="cell-right">621226220101693960</span>
	      			</div>
					<div class="li-row">
	      				<span>交易账户</span>
	      				<span class="cell-right">621226220101693960</span>
	      			</div>
	      			<div class="li-row">
	      				<span>交易时间</span>
	      				<span class="cell-right">2018-10-22</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资本金</span>
	      				<span class="cell-right">￥160,000.00</span>
	      			</div>
					<div class="li-row">
	      				<span>还款本金</span>
	      				<span class="cell-right">￥0.00</span>
	      			</div>
					<div class="li-row">
	      				<span>还款利息</span>
	      				<span class="cell-right">￥0.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>还款保理费</span>
	      				<span class="cell-right">￥0.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>还款费用</span>
	      				<span class="cell-right">￥0.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>还款罚息</span>
	      				<span class="cell-right">￥0.00</span>
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
				one: '2017101201',
				two: '大连商场南楼',
				three: '12,341.00',
				four: '12,341.00',
				five: '9,872.80',
				six: '2019-10-18',
				seven: '未融资',
			},
			{
				one: '2017101201',
				two: '大连商场南楼',
				three: '12,341.00',
				four: '12,341.00',
				five: '9,872.80',
				six: '2019-10-18',
				seven: '未融资',
			}]
		}
	},
  created() {
	  setTitle('对账查询')
	  this.pageScrollTo()
  },
  methods: {
  	submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
	},
	handleSee() {
		this.$router.push('/search/loan/detail')
	},
	pageScrollTo() {
      window.scrollTo(0, 0);
    }
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>