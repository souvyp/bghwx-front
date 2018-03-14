<template>
	<!--增量授信融资申请-->
  <div class="financing-apply">
  	<yd-cell-group>
  		<div class="card">
	        <yd-cell-item>
	            <span slot="left">增量授信最大可融资金额</span>
	            <span slot="right">{{oneList.one}}元</span>
	        </yd-cell-item>
	  	</div>
  		<div class="card page-actionsheet">
  			<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">申请信息</span>
	        </yd-cell-item>	        
	        <yd-cell-item class="input-text">
	            <span slot="left">申请总金额：</span>
	            <yd-input slot="right" v-model="input4"  placeholder="请输入申请融资总金额"></yd-input>
	        </yd-cell-item>
	        <yd-cell-item arrow  @click.native="show2 = true">
	            <span slot="left">还款方式</span>
	            <span slot="right">请选择还款方式</span>
	        </yd-cell-item>
	        <ul class="tab-ul">
	      		<li v-for="twoList in twoLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>还款到期日</span>
	      				<span class="cell-right">{{oneList.one}}%</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资入账账号</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      		</li>
	      	</ul>
	      	<yd-actionsheet :items="myItems2" v-model="show2"></yd-actionsheet>
		</div>
		<div class="card">
			<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">利息信息</span>
	        </yd-cell-item>
	        <ul class="tab-ul">
	      		<li v-for="twoList in twoLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>利率</span>
	      				<span class="cell-right">{{twoList.one}}%</span>
	      			</div>
	      			<div class="li-row">
	      				<span>付款方</span>
	      				<span class="cell-right">{{twoList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>前付/后付</span>
	      				<span class="cell-right">{{twoList.three}}</span>
	      			</div>
	      		</li>
	      	</ul>
	  	</div>
	  	<div class="card">
			<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">基础费用信息</span>
	        </yd-cell-item>
	        <ul class="tab-ul">
	      		<li v-for="threeList in threeLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>费用名称</span>
	      				<span class="cell-right">{{threeList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>付款方</span>
	      				<span class="cell-right">{{threeList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>前付/后付</span>
	      				<span class="cell-right">{{threeList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>收费方式</span>
	      				<span class="cell-right">{{threeList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>值</span>
	      				<span class="cell-right">{{threeList.five}}%</span>
	      			</div>
	      		</li>
	      	</ul>
	  	</div>
  	</yd-cell-group>
	<div>
		<yd-button size="large" type="primary" @click.native="signContract">下一步</yd-button>
	</div>   
  </div>
</template>
<script>
export default {
	data() {
		return {
			show2: false,
            myItems2: [
                {
                    label: '按季付息到期还本',
                    callback: () => {
                        this.$dialog.toast({mes: 'Say: 1！'})
                    }
                },
                {
                    label: '按月付息到期还本',
                    callback: () => {
                        this.$dialog.toast({mes: 'Say: 2！'})
                    }
                },
                {
                    label: '利随本清',
                    callback: () => {
                        this.$dialog.toast({mes: 'Say: 3！'})
                    }
                }
            ],
			oneList: {
				one: '2018-01-10',
				two: '1234567'
			},
			twoLists: [{
				one: '7.50',
				two: '卖方',
				three: '后付'
			}],
			threeLists: [{
				one: '卖方保理费',
				two: '卖方',
				three: '后付',
				four: '比例',
				five: '1.00'
			}],
			actions: [
			{
				name: '按季付息到期还本',
				method: ''
			},
			{
				name: '按月付息到期还本',
				method: ''
			},
			{
				name: '利随本清',
				method: ''
			}],
		}
	},
  created() {
  },
  methods: {
  	signContract() {
  		this.$router.push('/financingManager/addCreditSignInfo')
  	}
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
</style>