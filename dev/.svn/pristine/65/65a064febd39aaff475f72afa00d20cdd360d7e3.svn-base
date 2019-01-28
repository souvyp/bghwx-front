<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div class="page-actionsheet">
			<div class="title-top">
				<div><span class="text">11月02日应还款</span></div>
				<div><span class="price">￥5,343.33</span></div>
				<div class="bottom"></div>
			</div>
			<div class="repay">
				<yd-cell-item class="input-text">
					<span slot="left">还款本金</span>
					<span slot="right"></span>
				</yd-cell-item>
				<yd-cell-item class="input-text input-money">
					<span slot="left">￥</span>
					<yd-input slot="right"  v-model="form.repayPrincipal" placeholder="输入还款金额" ></yd-input>
				</yd-cell-item>
				<yd-cell-item class="input-text">
					<span slot="left">还款方式</span>
					<span slot="right">按月付息到期还本</span>
				</yd-cell-item>
			</div>
			<ul class="tab-ul">
	      		<li  class="tab-ul-li">
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
	<div class="footer">
		<yd-button v-if="form.repayPrincipal != ''" size="large" type="primary" @click.native="saveRepay">提交</yd-button>
		<yd-button v-else type="primary" size="large" disabled >提交</yd-button>
	</div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			form: {
				repayPrincipal: '5,343.33'
			}
		}
	},
  created() {
	  setTitle('还款详情')
  },
  methods: {
	saveRepay() {

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
		}
	}
	.repay {
		background: #fff;
		border-bottom: 1px solid #fcf9fe;
		margin-bottom: 10px;
	}
</style>