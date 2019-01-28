<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div class="page-actionsheet">
			<div class="title-top">
				<div><span class="text">待还本金</span></div>
				<div><span class="price">￥160,000.00</span></div>
				<div class="bottom">共<span class="">3期</span>借款未结清</div>
			</div>
			<ul class="tab-ul">
	      		<li  class="tab-ul-li">
					<div class="li-title">
	      				<div>
							  <div>应还金额</div>
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
					<div class="li-row">
	      				<span>还款状态</span>
	      				<span class="cell-right">未结清</span>
	      			</div>
	      		</li>
				<li  class="tab-ul-li">
					<div class="li-title">
	      				<div>
							  <div>应还金额</div>
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
					<div class="li-row">
	      				<span>还款状态</span>
	      				<span class="cell-right">未结清</span>
	      			</div>
	      		</li>
				<li  class="tab-ul-li">
					<div class="li-title">
	      				<div>
							  <div>应还金额</div>
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
					<div class="li-row">
	      				<span>还款状态</span>
	      				<span class="cell-right">未结清</span>
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
	  setTitle('还款详情')
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