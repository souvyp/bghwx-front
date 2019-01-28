<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div class="page-actionsheet">
			<div class="title-top" v-if="isShow">
				<div><span class="text">申请金额</span></div>
				<div><span class="price">￥9,872.80</span></div>
				<div class="bottom">年化利率<span>10.0%</span></div>
			</div>
			<div class="title-top" v-else>
				<div><span class="text">还款总额</span></div>
				<div><span class="price">￥0.00</span></div>
				<div class="bottom">您没有未结清的借款</div>
			</div>
			<ul class="tab-ul">
	      		<li  class="tab-ul-li">
					<div class="li-title">
	      				<div>
							  <div>应还款</div>
							  <div class="date">2018月11月02日</div>
						</div>
						<div><span class="cell-right">￥5,343.33</span></div>
	      			</div>
					<div class="li-row">
	      				<span>本金</span>
	      				<span class="cell-right">5,333.33</span>
	      			</div>
					<div class="li-row">
	      				<span>利息</span>
	      				<span class="cell-right">10.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>保理费</span>
	      				<span class="cell-right">0.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>费用</span>
	      				<span class="cell-right">0.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>罚息</span>
	      				<span class="cell-right">0.00</span>
	      			</div>
	      		</li>
				<li  class="tab-ul-li">
					<div class="li-title">
	      				<div>
							  <div>应还款</div>
							  <div class="date">2018月12月02日</div>
						</div>
						<div><span class="cell-right">￥5,343.33</span></div>
	      			</div>
					<div class="li-row">
	      				<span>本金</span>
	      				<span class="cell-right">5,333.33</span>
	      			</div>
					<div class="li-row">
	      				<span>利息</span>
	      				<span class="cell-right">10.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>保理费</span>
	      				<span class="cell-right">0.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>费用</span>
	      				<span class="cell-right">0.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>罚息</span>
	      				<span class="cell-right">0.00</span>
	      			</div>
	      		</li>
				<li  class="tab-ul-li">
					<div class="li-title">
	      				<div>
							  <div>应还款</div>
							  <div class="date">2019月01月02日</div>
						</div>
						<div><span class="cell-right">￥5,343.33</span></div>
	      			</div>
					<div class="li-row">
	      				<span>本金</span>
	      				<span class="cell-right">5,333.33</span>
	      			</div>
					<div class="li-row">
	      				<span>利息</span>
	      				<span class="cell-right">10.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>保理费</span>
	      				<span class="cell-right">0.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>费用</span>
	      				<span class="cell-right">0.00</span>
	      			</div>
					  <div class="li-row">
	      				<span>罚息</span>
	      				<span class="cell-right">0.00</span>
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
			isShow: true,
		}
	},
  created() {
	  setTitle('还款计划')
  },
  methods: {
  	submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
	},
	applyFinaning() {
		this.$router.push('/financing/loanApply/apply')
	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
	
</style>