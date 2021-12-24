<!-- 首页 -->
<template>
	<div class="main">
		<div class="left">
			<div class="left_fan">几个扇形图</div>
			<div class="left_bar">柱状图</div>
		</div>
		<div class="mid"></div>
		<div class="right">
			<div class="right_bar"></div>
			<div class="right_line"></div>
		</div>
	</div>
</template>
<script></script>
<style Lang="less" scoped>
.main{
	display: flex;
	flex-direction: row;
}
.left{
	/* 总宽度： 499px    总高度：964px*/
	width: 437px;
	height: 940px;
	margin-left: 24px; 
	margin-right: 38px;
	margin-bottom: 24px;
}
.left_fan{
	width: 437px;
	height: 453px;
	margin-bottom: 48px;
	background-color: #42B983
}
.left_bar{
	width: 437px;
	height: 439px;
	background-color: #42B983
}
.mid{
	width: 899px;
	height: 940px;
	margin-bottom: 24px;
	background-color: cadetblue;
}
.right{
	width: 458px;
	height: 940px;
	margin-left: 40px;
	margin-right: 24px;
	margin-bottom: 24px;
}
.right_bar{
	width: 458px;
	height: 422px;
	margin-bottom: 24px;
	background-color: burlywood;
}
.right_line{
	width: 458px;
	height: 494px;
	background-color: burlywood;
}
</style>