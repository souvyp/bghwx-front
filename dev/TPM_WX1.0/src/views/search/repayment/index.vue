<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="还款单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
			<ul class="tab-ul">
	      		<li class="tab-ul-li tab-ul-li-list" @click="handleSee">
					<div class="financing-list">
						<div class="title">
							<div><span>LI20181022210045542837796</span></div>
							<div class="color-green"><span>未结清</span></div>
						</div>
						<div>
							<div class="color-grey"><icon name="applyFinanice" scale="2.5" class="icon-finanice"></icon><span>待还本金</span></div>
							<div class="price"><span>￥160,000.00</span></div>
						</div>
						<div>
							<div class="text">
								<div class="color-grey"><span>放款金额</span></div>
								<div><span class="color-green">￥160,000.00</span></div>
							</div>
							<div class="text">
								<div class="color-grey"><span>到期时间</span></div>
								<div><span>2019-01-22</span></div>
							</div>
						</div>
					</div>
	      		</li>
				  <li class="tab-ul-li tab-ul-li-list" @click="handleSee">
					<div class="financing-list">
						<div class="title">
							<div><span>LI20181022210045542837797</span></div>
							<div class="color-green"><span>未结清</span></div>
						</div>
						<div>
							<div class="color-grey"><icon name="applyFinanice" scale="2.5" class="icon-finanice"></icon><span>待还本金</span></div>
							<div class="price"><span>￥160,000.00</span></div>
						</div>
						<div>
							<div class="text">
								<div class="color-grey"><span>放款金额</span></div>
								<div><span class="color-green">￥160,000.00</span></div>
							</div>
							<div class="text">
								<div class="color-grey"><span>到期时间</span></div>
								<div><span>2019-01-22</span></div>
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
			}
		}
	},
  created() {
	  setTitle('还款查询')
	  window.scrollTo(0, 0);
  },
  methods: {
  	submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
	},
	handleSee() {
		this.$router.push('/search/repayment/detail')
	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>