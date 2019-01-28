<template>
  <div class="financing-apply">
  	<!-- <yd-cell-group>
	  	<div class="page-actionsheet">
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
	      				<span>申请融资总金额</span>
	      				<span class="cell-right">4,000,000.00元</span>
	      			</div>
	      			<div class="li-row">
	      				<span>每月还款日</span>
	      				<span class="cell-right">21</span>
	      			</div>
	      			<div class="li-row">
	      				<span>还款到期日</span>
	      				<span class="cell-right">2018-12-06</span>
	      			</div>
					<div class="li-row">
	      				<span>总利率</span>
	      				<span class="cell-right">8.00%</span>
	      			</div>
					<div class="li-row">
	      				<span>客户承担利息比率</span>
	      				<span class="cell-right">100.00%</span>
	      			</div>
					<div class="li-row">
	      				<span>客户利率</span>
	      				<span class="cell-right">8.00%</span>
	      			</div>
					<div class="li-row">
	      				<span>买方利率</span>
	      				<span class="cell-right">0.00%</span>
	      			</div>
					<div class="li-row">
	      				<span>前付/后付</span>
	      				<span class="cell-right">后付</span>
	      			</div>
					<div class="li-row">
	      				<span>还款方式</span>
	      				<span class="cell-right">按月付息到期还本</span>
	      			</div>
					<div class="li-row">
	      				<span>是否支持提前还款</span>
	      				<span class="cell-right">是</span>
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
	      				<span>罚息利率</span>
	      				<span class="cell-right">15.00%</span>
	      			</div>
					<div class="li-row">
	      				<span>罚息利率方式</span>
	      				<span class="cell-right">年利率</span>
	      			</div>
					<div class="li-row">
	      				<span>坏账天数</span>
	      				<span class="cell-right">90</span>
	      			</div>
					  <div class="li-row">
	      				<span>总保理费率</span>
	      				<span class="cell-right">3.00%</span>
	      			</div>
					  <div class="li-row">
	      				<span>客户承担保理费比率</span>
	      				<span class="cell-right">100.00%</span>
	      			</div>
					  <div class="li-row">
	      				<span>客户保理费率</span>
	      				<span class="cell-right">3.00%</span>
	      			</div>
					  <div class="li-row">
	      				<span>买方保理费率</span>
	      				<span class="cell-right">0.00%</span>
	      			</div>
	      		</li>
	       </ul>
	  	</div>
  	</yd-cell-group> -->
	<div class="img-pannel" v-if="isShow">
		<div class="content">
			<img src="../../../assets/images/false.png" width="120" />
			<div class="text">
				<span>没有已结清记录</span>
			</div>
		</div>
	</div>
	<div v-else>
		<ul class="tab-ul">
			<li  class="tab-ul-li">
				<div class="li-title">
					<div>
							<div>应还金额 (元)</div>
							<div class="date">2018月11月02日</div>
					</div>
					<div><span class="cell-right">5,343.33</span></div>
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
							<div>应还金额 (元)</div>
							<div class="date">2018月12月02日</div>
					</div>
					<div><span class="cell-right">5,343.33</span></div>
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
							<div>应还金额 (元)</div>
							<div class="date">2019月01月02日</div>
					</div>
					<div><span class="cell-right">5,343.33</span></div>
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
	  setTitle('借款记录')
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
	.img-pannel {
		background: #f8f8f8;
		height: 100vh;
		.content {
			text-align: center;
			img {
				margin: 45% 0 30px 0;
			}
			.text {
				color: #909090;
				font-size: 0.35rem;
			}
		}
	}
</style>