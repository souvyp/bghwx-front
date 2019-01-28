<template>
	<!--融资签章代申请-->
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="合同编号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
			<ul class="tab-ul">
				<li class="tab-ul-li tab-ul-li-list" @click="handleSee">
					<div class="financing-list">
						<div class="title">
							<div class="color-green"><span>合同编号: CI20181022205801627816264</span></div>
						</div>
						<div class="li-row">
							<span>合同名称</span>
							<span class="cell-right">LOAN_CONTRACT.pdf</span>
						</div>
						<div class="li-row">
							<span>合同类型</span>
							<span class="cell-right">服务合同（融资合同）</span>
						</div>
						<div class="li-row">
							<span>签订日期</span>
							<span class="cell-right">2018-10-22</span>
						</div>
						<div class="li-row">
							<span>到期时间</span>
							<span class="cell-right">2018-12-05</span>
						</div>
						<div class="li-row">
							<span>状态</span>
							<span class="cell-right">放款成功</span>
						</div>
					</div>
	      		</li>
				  <li class="tab-ul-li" @click="handleSee">
					<div class="financing-list">
						<div class="title">
							<div class="color-green"><span>合同编号: CI20181022205801627816265</span></div>
						</div>
						<div class="li-row">
							<span>合同名称</span>
							<span class="cell-right">LOAN_CONTRACT.pdf</span>
						</div>
						<div class="li-row">
							<span>合同类型</span>
							<span class="cell-right">服务合同（融资合同）</span>
						</div>
						<div class="li-row">
							<span>签订日期</span>
							<span class="cell-right">2018-10-22</span>
						</div>
						<div class="li-row">
							<span>到期时间</span>
							<span class="cell-right">2018-12-05</span>
						</div>
						<div class="li-row">
							<span>状态</span>
							<span class="cell-right">放款成功</span>
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
	  setTitle('合同查询')
	  window.scrollTo(0, 0);
  },
  methods: {
  	submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
	},
	handleSee() {
		this.$router.push('/search/loan/detail')
	},
	handleDownload() {

	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>