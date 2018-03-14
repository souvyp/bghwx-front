<template>
	<!--融资签章代申请查看合同信息-->
  <div class="financing-apply">
  	<yd-cell-group>
  		<div class="card page-actionsheet">
  			<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">应收单信息</span>
	        </yd-cell-item>	
			<ul class="tab-ul">
	      		<li class="tab-ul-li">
	      			<div class="li-row">
	      				<span>融资单号</span>
	      				<span class="cell-right">{{oneList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>业务期间</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>应收单到期日</span>
	      				<span class="cell-right">{{oneList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>结算单应收金额</span>
	      				<span class="cell-right">{{oneList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>电票金额</span>
	      				<span class="cell-right">{{oneList.five}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>最大可融资金额</span>
	      				<span class="cell-right">{{oneList.six}}</span>
	      			</div>
	      		</li>
	        </ul>
	  	</div>
	  	<div class="card">
  			<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">申请信息</span>
	        </yd-cell-item>	        
	        <yd-cell-item class="input-text">
	            <span slot="left">申请总金额</span>
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
	      				<span class="cell-right">{{twoList.one}}%</span>
	      			</div>
	      			<div class="li-row">
	      				<span>融资入账账号</span>
	      				<span class="cell-right">{{twoList.two}}</span>
	      			</div>
	      		</li>
	      	</ul>
	      	<yd-actionsheet :items="myItems2" v-model="show2"></yd-actionsheet>
		</div>
  		<div class="card">
  			<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">合同信息</span>
	        </yd-cell-item>	
			<ul class="tab-ul">
	      		<li class="tab-ul-li">
	      			<div class="li-row">
	      				<span>合同编号</span>
	      				<span class="cell-right">
	      					<a href="../../aaa.xlsx" >{{oneList.one}}</a>
	      				</span>
	      			</div>
	      			<div class="li-row">
	      				<span>合同名称</span>
	      				<span class="cell-right">{{oneList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>合同类型</span>
	      				<span class="cell-right">{{oneList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>合同创建时间</span>
	      				<span class="cell-right">{{oneList.four}}</span>
	      			</div>
	      		</li>
	        </ul>
	  	</div>
	  	<div class="card">
	  		<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">利息信息</span>
	        </yd-cell-item>
	  		<ul class="tab-ul">
	      		<li v-for="fourList in fourLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>利率</span>
	      				<span class="cell-right">{{fourList.one}}%</span>
	      			</div>
	      			<div class="li-row">
	      				<span>付款方</span>
	      				<span class="cell-right">{{fourList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>前付/后付</span>
	      				<span class="cell-right">{{fourList.three}}</span>
	      			</div>
	      		</li>
	      	</ul>
	  	</div>
	  	<div class="card">
	  		<yd-cell-item class="card-title" arrow>
	            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="left">费用信息</span>
	        </yd-cell-item>
	  		<ul class="tab-ul">
	      		<li v-for="fiveList in fiveLists" class="tab-ul-li">
	      			<div class="li-row">
	      				<span>费用名称</span>
	      				<span class="cell-right">{{fiveList.one}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>付款方</span>
	      				<span class="cell-right">{{fiveList.two}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>前付/后付</span>
	      				<span class="cell-right">{{fiveList.three}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>收费方式</span>
	      				<span class="cell-right">{{fiveList.four}}</span>
	      			</div>
	      			<div class="li-row">
	      				<span>值</span>
	      				<span class="cell-right">{{fiveList.five}}%</span>
	      			</div>
	      		</li>
	      	</ul>
	  	</div>
  	</yd-cell-group>
	<div>
		<yd-button size="large" type="primary" @click.native="applyContract">下一步(签章)</yd-button>
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
			start1: false,
			sheetVisible: false,
			checkOption: [''],
			checkValue: [],
			oneList: {
				one: 'Bgh0001',
				two: '保理池融资业务书.pdf',
				three: '保理池服务合同',
				four: '2018-01-10'
			},
			twoLists: [{
				one: '15801891112'
			}],
			threeLists: [{	//申请信息
				one: '陈梅',
				two: '2018-08-08',
				three: '111111',
				four: '1111111',
				five: '11111',
				six: '平安银行',
				seven: '11111',
				eight: '11111',
				nine: '按季付息到期还本',
				ten: '2019-09-09'
			}],
			fourLists: [{	//利息信息
				one: '7.50',
				two: '卖方',
				three: '后付'
			}],
			fiveLists: [{
				one: '卖方保理费',
				two: '卖方',
				three: '后付',
				four: '比例',
				five: '1.00'
			}],
		}
	},
  created() {
  },
  methods: {
  	sendCode1() {
        this.$dialog.loading.open('发送中...');
        setTimeout(() => {

            this.start1 = true;
            this.$dialog.loading.close();

            this.$dialog.toast({
                mes: '已发送',
                icon: 'success',
                timeout: 1500
            });

        }, 1000);
    },
    applyContract() {
    	this.$router.push('/totalShowSingle/finaAgentApplyContract')
    }
  }

}

</script>



<style rel="stylesheet/scss" lang="scss" scoped="scoped" >
.financing-sign {
	.row-validate {
		display: inline-flex;
	}
	.btn-validate {
		text-align: center;
	}
	.mint-button--small {
		margin-left: 20px;
	}
}
</style>