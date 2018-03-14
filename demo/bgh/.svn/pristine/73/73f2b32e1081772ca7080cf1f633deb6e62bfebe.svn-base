<template>
	<!--总览(单)-->
  <div class="receive-detail">
  	<yd-tab>
        <yd-tab-panel label="应收池明细">
        	<!--应收池明细-->
			<ul class="tab-ul">
	      		<li class="tab-ul-li">
	      			<div class="li-row">
	      				<span>最大可融资额度</span>
	      				<span class="cell-right">{{oneList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资金额</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>当前可融资额度</span>
	      				<span class="cell-right">{{oneList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>当前可融资额度</span>
	      				<span class="cell-right">{{oneList.four}}</span>
	      			</div>
	      		</li>
	      </ul>
        </yd-tab-panel>
        <yd-tab-panel label="最近到期借款">
        	
        	<ul class="tab-ul">
	      		<li v-for="twoList in twoLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>到期日</span>
	      				<span class="cell-right">{{twoList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资单号</span>
	      				<span class="cell-right">{{twoList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>应还金额</span>
	      				<span class="cell-right">{{twoList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>计息方式</span>
	      				<span class="cell-right">{{twoList.four}}</span>
	      			</div>
	      		</li>
	      	</ul>
        </yd-tab-panel>
        <yd-tab-panel label="尾款信息">
        	<ul class="tab-ul">
	      		<li v-for="threeList in threeLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>尾款申请单号</span>
	      				<span class="cell-right">{{threeList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请日期</span>
	      				<span class="cell-right">{{threeList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>申请划转金额</span>
	      				<span class="cell-right">{{threeList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>状态</span>
	      				<span class="cell-right">{{threeList.four}}</span>
	      			</div>
	      		</li>
	      	</ul>
        </yd-tab-panel>
   </yd-tab>
  </div>
</template>
<script>
export default {
	data() {
		return {
			active: 'tab-container1',
			oneList: {
				one: 9305903.11,
				two: 70022.85,
				three: 7979124.89,
				four: 144800.41
			},
			twoLists: [{
				one: '2015-09-09',
				two: '1234565',
				three: '55555',
				four: '利息'
			},
			{
				one: '2015-09-09',
				two: '1234565',
				three: '55555',
				four: '利息'
			}],
			threeLists: [{
				one: '111111111',
				two: '2015-08-09',
				three: '66666',
				four: '状态1'
			},
			{
				one: '222222',
				two: '2015-03-09',
				three: '444',
				four: '状态2'
			}]
		}
	},
  created() {
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
	
</style>