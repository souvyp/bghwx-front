<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="申请单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" :key="oneList.one" class="tab-ul-li" @click="handleSee">
					<div class="financing-list">
						<div class="title">
							<div><span>LA20181022031345680334241</span></div>
							<div class="color-green"><span>放款成功</span></div>
						</div>
						<div class="content">
							<div class="con-title">
								<div class="text color-grey"><span>申请金额</span></div>
								<div class="price"><span>￥4,000,000</span></div>
							</div>
							<div class="con-title">
								<div class="text">
									<div class="color-grey"><span>放款金额</span></div>
									<div><span>￥3,999,750</span></div>
								</div>
								<div class="text">
									<div class="color-grey"><span>融资日期</span></div>
									<div><span>2018-10-22</span></div>
								</div>
							</div>
						</div>
					</div>
	      			<!-- <div class="li-row">
	      				<span>申请单号</span>
	      				<span class="cell-right">LA20181022031345680334241</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资合同</span>
	      				<span class="cell-right">CI20181022031345680924398</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请金额</span>
	      				<span class="cell-right">￥4,000,000</span>
	      			</div>
	      			<div class="li-row">
	      				<span>放款金额</span>
	      				<span class="cell-right">￥3,999,750</span>
	      			</div>
					<div class="li-row">
	      				<span>融资日期</span>
	      				<span class="cell-right">2018-10-22</span>
	      			</div>
					  <div class="li-row">
	      				<span>融资情况</span>
	      				<span class="cell-right">放款成功</span>
	      			</div>
	      			<div class="li-row">
	      				<span class="cell-right" >
	      					<yd-button  type="primary" @click.native="handleSee">查看详情</yd-button>
	      				</span>
					</div>  -->
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
	  setTitle('融资查询')
	  window.scrollTo(0, 0);
  },
  methods: {
  	submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
	},
	handleSee() {
		this.$router.push('/search/loan/detail')
	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>