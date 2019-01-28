<template>
  <div class="financing-apply">
  	<yd-cell-group>
	  	<div>
	  		<yd-search  :on-submit="submitHandler"  placeholder="编号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" :key="oneList.one" class="tab-ul-li" @click="applyFinaning">
					<div class="financing-list">
						<div class="title">
							<div><span>{{oneList.one}}</span></div>
							<div class="color-green"><span>{{oneList.seven}}</span></div>
						</div>
						<div class="content">
							<div class="con-title">
								<div class="text color-grey"><span>融资额度</span></div>
								<div class="price"><span>￥{{oneList.five}}</span></div>
							</div>
							<div class="con-title">
								<div class="text">
									<div class="color-grey"><span>买方</span></div>
									<div><span>{{oneList.two}}</span></div>
								</div>
								<div class="text">
									<div class="color-grey"><span>截止时间</span></div>
									<div><span>{{oneList.six}}</span></div>
								</div>
							</div>
						</div>
					</div>
	      		</li>
	       </ul>
	  	</div>
  	</yd-cell-group>
	<!-- <div>
		<Footer></Footer>
	</div> -->
  </div>
</template>
<script>
import Footer from '@/views/footer'
export default {
	components: {Footer},
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
				one: '2017101202',
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
	  setTitle('融资申请')
	  this.pageScrollTo()
  },
  methods: {
  	submitHandler() {
        this.$dialog.toast({mes: `搜索：`});
	},
	applyFinaning() {
		this.$router.push('/financing/loanApply/apply')
	},
	pageScrollTo() {
      window.scrollTo(0, 0);
    }
  }

}

</script>

<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>