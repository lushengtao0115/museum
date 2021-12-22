<!-- 首页 -->
<template>
	<div class="main">
		<!--主体内容部分-->
		<div class="left">
			<!--菜单栏导航部分-->
		</div>
		<div class="mid">
			<div class="mid1">
				<!--风险统计-->
			</div>
			<div class="mid2">
				<!--文物清单-->
			</div>
		</div>
		<div class="right">
			<div class="right1">
				<!--历史数据-->
			</div>
			<div class="right2">
				<!--文物占比-->
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style Lang="less" scoped>
.main{
	display: flex;
	flex-direction: row;	
}
.left{
	width: 426px;
	height: 940px;
	background-color: aquamarine;
	margin-left: 24px;
	margin-right: 40px;
	margin-bottom: 24px;
	background-image: url('../assets/image/bg／san.png');
}
.mid{
	width: 709px;
	height: 940px;
	margin-right: 40px;
	margin-bottom: 24px;
	display: flex;
	flex-direction: column;
}
.mid1{
	/* background-color: brown; */
	height: 457px;
	margin-bottom: 24px;
	background-image: url('../assets/image/bg／wu.png');
}
.mid2{
	/* background-color: cyan; */
	height: 459px;
	background-image: url('../assets/image/bg／liu.png');
}
.right{
	width: 657px;
	height: 940px;
	margin-right: 24px;
	margin-bottom: 24px;
}
.right1{
	/* background-color: brown; */
	height: 457px;
	margin-bottom: 24px;
	background-image: url('../assets/image/bg／ba.png');
}
.right2{
	/* background-color: cyan; */
	height: 459px;
	background-image: url('../assets/image/bg.png');
}
</style>
