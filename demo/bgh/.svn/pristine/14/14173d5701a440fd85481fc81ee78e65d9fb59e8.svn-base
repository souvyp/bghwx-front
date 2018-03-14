<template>
	<!--尾款转出流水-->
  <div class="receive-detail financing-apply">
  	<yd-cell-group>
  		<div>
	  		<yd-search v-model="value" :on-submit="submitHandler"  placeholder="转出单号" cancel-text=""></yd-search>
	  	</div>
	  	<div class="page-actionsheet">
	  		<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">尾款转出流水  (单位：元)</span>
	        </yd-cell-item>
			<ul class="tab-ul">
	      		<li v-for="oneList in oneLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>申请单号</span>
	      				<span class="cell-right">{{oneList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请金额</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>生成时间</span>
	      				<span class="cell-right">{{oneList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>转入账户</span>
	      				<span class="cell-right">{{oneList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>状态</span>
	      				<span class="cell-right">{{oneList.five}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>划转流水号</span>
	      				<span class="cell-right">{{oneList.six}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>划转金额</span>
	      				<span class="cell-right">{{oneList.seven}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>划转时间</span>
	      				<span class="cell-right">{{oneList.eight}}</span>
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
			oneLists: [{
				one: 'RZSQ2017122909132000',
				two: '1,256,745.37	',
				three: '2017-12-28',
				four: '15000081504804',
				five: '审批中',
				six: '',
				seven: '0.00',
				eight: ''
			},
			{
				one: 'RZSQ2017122909132000',
				two: '1,256,745.37	',
				three: '2017-12-28',
				four: '15000081504804',
				five: '审批中',
				six: '',
				seven: '0.00',
				eight: ''
			}]
		}
	},
  created() {
  },
  methods: {
  	signContract() {
  		this.$router.push('/queryManager/finaQuerySignContract')
  	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>