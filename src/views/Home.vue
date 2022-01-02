<template>
    <div class='Home'>
		<el-container>
		<el-header>
			<div class="HomeNav">
			<div class="NavLeft">
				<div class='NavLeftMenu'>
				<el-menu class="homeMenuNav" mode="horizontal" router
						:default-active="activePath">
					<el-menu-item index="/homemain" @click="saveNavState('/homemain')">
					<img src="../assets/image/icon／home_slt.png" alt="">&thinsp;
					首页
					</el-menu-item>
					<el-menu-item index="/searchgoods" @click="saveNavState('/searchgoods')">
					<img src="../assets/image/icon／rtm_nts.png" alt="">&thinsp;
					实时监测
					</el-menu-item>
					<el-menu-item index="/dataanalysis" @click="saveNavState('/dataanalysis')">
					<img src="../assets/image/icon／da_nts.png" alt="">&ensp;
					数据分析
					</el-menu-item>
				</el-menu>
				</div>
			</div>
			<div class="NavMid">
				<span class="info1">上海博物馆监控平台</span>
			</div>
			<div class="NavRight">
				<div class='NavRightMenu'>
				<el-menu class="homeMenuNav" mode="horizontal" router
						:default-active="activePath">
					<el-menu-item index="/systemmanagement" @click="saveNavState('/homemain')">
					<img src="../assets/image/icon／home_slt.png" alt="">&thinsp;
					系统管理
					</el-menu-item>
					<el-menu-item index="/statistics " @click="saveNavState('/searchgoods')">
					<img src="../assets/image/icon／rtm_nts.png" alt="">&thinsp;
					数据统计
					</el-menu-item>
				</el-menu>
				</div>
			</div>
			</div>
		</el-header>
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
  background-color: #F2F5FF;
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
/* fjd添加 */
.NavLeft {
  width: 600px;
  display: flex;
  justify-content: space-between;
}

.NavLeftMenu {
  width: 600px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-menu {
  background-color: #f2f5ff;
  border: none;
}

.el-menu-item {
  font: bold 24px "Microsoft YaHei";
  /* font-size: 1.25rem; */
  line-height: 1.625rem !important;
  width: 190px;
  height: 44px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px !important;
  margin-top: 16px !important;
  color: #6778BF !important;
  padding: 20px 16px;
  background-color: #F2F5FF;
}

.el-menu-item.is-active {
  background-color: #F2F5FF;
}

.NavMid {
  margin-left: 0px;
}

.info1 {
  z-index: 4;
  width: 360px;
  height: 56px;
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 47, 108, 1);
  font-size: 40px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 56px;
  text-align: center;
  margin: 18px 0 0 0px;
}

.NavRight {
  width: 600px;
  display: flex;
  justify-content: space-between;
}

.NavRightMenu {
  width: 600px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.NavRightMenu el-menu-item {
  margin: 0 40px;
}
</style>
