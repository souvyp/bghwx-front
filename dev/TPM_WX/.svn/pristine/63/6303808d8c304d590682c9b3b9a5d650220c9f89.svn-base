<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="融资单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
			<ul class="tab-ul">
	      		<li class="tab-ul-li" @click="applyRepay">
					<div class="financing-list">
						<div class="title">
							<div><span>LI20181022210045542837796</span></div>
							<div class="color-green"><span>未结清</span></div>
						</div>
						<div class="content">
							<div class="con-title">
								<div class="text color-grey"><span>待还本金</span></div>
								<div class="price"><span>￥160,000.00</span></div>
							</div>
							<div class="con-title">
								<div class="text">
									<div class="color-grey"><span>方式</span></div>
									<div><span>按月付息到期还本</span></div>
								</div>
								<div class="text">
									<div class="color-grey"><span>到期时间</span></div>
									<div><span>2019-01-22</span></div>
								</div>
							</div>
						</div>
					</div>
	      		</li>
				<li class="tab-ul-li" @click="applyRepay">
					<div class="financing-list">
						<div class="title">
							<div><span>LI20181022210045542837797</span></div>
							<div class="color-green"><span>未结清</span></div>
						</div>
						<div class="content">
							<div class="con-title">
								<div class="text color-grey"><span>待还本金</span></div>
								<div class="price"><span>￥160,000.00</span></div>
							</div>
							<div class="con-title">
								<div class="text">
									<div class="color-grey"><span>方式</span></div>
									<div><span>按月付息到期还本</span></div>
								</div>
								<div class="text">
									<div class="color-grey"><span>到期时间</span></div>
									<div><span>2019-01-22</span></div>
								</div>
							</div>
						</div>
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
		}
	},
  created() {
	  setTitle('还款申请')
	  this.pageScrollTo()
  },
  methods: {
  	submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
	},
	applyRepay() {
		this.$router.push('/financing/repayApply/apply')
	},
	pageScrollTo() {
      window.scrollTo(0, 0);
    }
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>