<template>
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div class="page-actionsheet">
			<div class="title-top">
				<div><span class="text">未还本金</span></div>
				<div><span class="price">￥160,000.00</span></div>
				<div class="bottom">共<span class="">3期</span>借款未结清</div>
			</div>
			<ul class="tab-ul">
	      		<li  class="tab-ul-li">
					<yd-cell-item arrow  @click.native="handlePlan">
						<span slot="left">
							<div>
								<span class="text">11月02日应还</span>
								<span class="price">￥5,343.33</span>
							</div>
						</span>
						<span slot="right"></span>
					</yd-cell-item>
	      		</li>
				<li class="tab-ul-li">
					<yd-cell-item arrow  @click.native="handleRepay">
						<span slot="left">
							<div>
								<span class="font">提前还本金</span>
								<span class="text">可提前结清所有借款</span>
							</div>
						</span>
						<span slot="right"></span>
					</yd-cell-item>
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
	handlePlan() {
		this.$router.push('/financing/repayApply/plan')
	},
	handleRepay() {
		this.$router.push('/financing/repayApply/repay')
	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
	.tab-ul {
		.text {
			color: #a9a9a9;
		}
		.price {
			display: block;
			font-size: 0.5rem;
		}
		.font {
			display: block;
			font-size: 0.34rem;
		}
	}
</style>