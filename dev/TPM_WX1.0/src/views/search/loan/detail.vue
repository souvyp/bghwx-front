<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div class="page-actionsheet">
			<div class="title-top">
				<div><span class="text">融资金额</span></div>
				<div><span class="price">￥160,000.00</span></div>
				<div class="bottom">年化利率<span>10.0%</span></div>
			</div>
			<div style="background:#fff;margin-bottom:10px;">
				<yd-cell-item arrow  @click.native="handlePlan">
					<span slot="left">
						<div>
							<span class="text">已结清借款</span>
							<span class="price"></span>
						</div>
					</span>
					<span slot="right"></span>
				</yd-cell-item>
				<yd-cell-item arrow  @click.native="handleRepay">
					<span slot="left">
						<div>
							<span class="text">未结清借款</span>
							<span class="price"></span>
						</div>
					</span>
					<span slot="right"></span>
				</yd-cell-item>
			</div>
			<ul class="tab-ul">
	      		<li  class="tab-ul-li">
					<div class="li-row">
	      				<span>融资客户</span>
	      				<span class="cell-right">绥阳县旺草镇闽诚高速路物资供应商行</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资账号</span>
	      				<span class="cell-right">621226220101693960</span>
	      			</div>
					<div class="li-row">
	      				<span>还款方式</span>
	      				<span class="cell-right">按月付息到期还本</span>
	      			</div>
					<div class="li-row">
	      				<span>还款到期日</span>
	      				<span class="cell-right">2018-12-06</span>
	      			</div>
					<div class="li-row">
	      				<span>每月还款日</span>
	      				<span class="cell-right">21</span>
	      			</div>
					<div class="li-row">
	      				<span>还款宽限天数</span>
	      				<span class="cell-right">30</span>
	      			</div>
					<div class="li-row">
	      				<span>还款提醒天数</span>
	      				<span class="cell-right">7</span>
	      			</div>
					<div class="li-row">
	      				<span>是否支持提前还款</span>
	      				<span class="cell-right">是</span>
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
		}
	},
  created() {
	  setTitle('融资详情')
  },
  methods: {
  	submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
	},
	applyFinaning() {
		this.$router.push('/financing/loanApply/apply')
	},
	handlePlan() {
		this.$router.push('/search/loan/plan')
	},
	handleRepay() {
		this.$router.push('/financing/loanApply/plan')	// 融资申请，还款计划
	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>