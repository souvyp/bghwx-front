<template>
  <div class="page-footer">
  	 <yd-tabbar>
        <yd-tabbar-item title="融资申请" link="#">
            <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="融资查询" link="#">
            <yd-icon name="search" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="配置管理" link="#">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>
<script>
export default {
	created() {
	}
}
</script>
<style lang="scss" scoped>
	.page-footer {
		position: fixed;
		width: 100%;
		bottom: 0;
	}
</style>

