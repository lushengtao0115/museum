<template>
    <div class='Home'>
        <el-container>
			<!-- 这里是每个页面共同的头 -->
            <el-header>
				<!-- 首页 实时监测 数据分析 数据统计 系统管理 -->
				<div class="HomeNav">
					<div class="Nav1">首页</div>
					<div class="Nav2">实时监测</div>
					<div class="Nav3">数据分析</div>
					<div class="Nav4">上海博物馆监控平台</div>
					<div class="Nav5">数据统计</div>
					<div class="Nav6">系统管理</div>
				</div>
            </el-header>
            <!--下面是各个不同的页面-->
			<router-view></router-view>
        </el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 被激活的链接地址
      activePath: ''
    }
  },
  methods: {
    handleCommandMore (command) {
      if (command === 'q') {
        window.sessionStorage.clear()
        this.$router.push('/login')
      }
    },
    saveNavState (activepath) {
      window.sessionStorage.setItem('activePath', activepath)
    }
  }
}
</script>

<style Lang="less" scoped>
.Home{
  width:100%;
  height:100%;
  /* background-image: url('../assets/image/bg／two.png'); */
  background-color: #FAFBFF;
  background-size: 100% 100%;
}
.el-container{
  height: 100%;
  width: 100%;
}
.el-header{
  padding: 0;
  /* 这里必须使用!important因为会有行内样式覆盖，优先级高*/
  height: 116px !important;
}
.HomeNav{
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
</style>
