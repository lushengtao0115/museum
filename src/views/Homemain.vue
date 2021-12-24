<!-- 首页 -->
<template>
	<div class="main">
		<!--主体内容部分-->
		<div class="left">
			<!--菜单栏导航部分-->
			<div class="left_select">
				<div class="left_select_title">当前位置</div>
				<div class="left_select_1">
				<el-select v-model="value1" placeholder="一展厅">
				<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				</div>
				<div class="left_select_2">
				<el-select v-model="value2" placeholder="青铜馆">
				<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				</div>
			</div>
			<div class="left_nav">
				<!--导航栏-->
				<el-menu background-color='transparent' text-color="black" active-text-color="blue" default-active="/searchgoods/searchgoodschildren" show-timeout="10" hide-timeout="10" router>
				<!--1.一级菜单-->
				<el-submenu index="1">
					<template slot="title">
						<div class="firstmenu">
						<span>
						1层展厅
						</span>
						</div>
					</template>
					<!--二级菜单-->
					<el-menu-item index="1-1" >
						<template>
							<div class="secondmenu">
							<span>临展</span>
							</div>
						</template>
					</el-menu-item>
					<el-submenu index="1-2">
				<template slot="title">
					<div class="secondmenu">
					<span>青铜陈列馆</span>
					</div>
					</template>
					<el-menu-item index="/searchgoods/searchgoodschildren1">
						<span>蛙式鼓-二氧化碳85</span>
					</el-menu-item>
					<el-menu-item index='/searchgoods/searchgoodschildren'>
						<span>镶红铜-光照紫外93</span>
					</el-menu-item>
					<el-menu-item index='/searchgoods/searchgoodschildren2'>
						<span>铜矿石-温湿度121</span>
					</el-menu-item>
					<el-menu-item index='/searchgoods/searchgoodschildren2'>
						<span>金属范畴造-温湿度121</span>
					</el-menu-item>
					<el-menu-item index='/searchgoods/searchgoodschildren2'>
						<span>砺石-温湿度123</span>
					</el-menu-item>
					<el-menu-item index='/searchgoods/searchgoodschildren2'>
						<span>绳纹提梁焚失法铸造-温湿度124</span>
					</el-menu-item>
					<el-menu-item index='/searchgoods/searchgoodschildren2'>
						<span>铜铁复合兵器-温湿度125</span>
					</el-menu-item>
					<el-menu-item index='/searchgoods/searchgoodschildren2'>
						<span>铜铁表面白亮处理-温湿度126</span>
					</el-menu-item>
<!-- 					<el-menu-item index="1-2-1">
						<template>
						<span>2021生肖展</span>  
						</template>
					</el-menu-item> -->
<!-- 					<el-submenu index="1-2-2">
						<template slot="title">
							<span>2021高山景行</span>
						</template>
						<el-menu-item index="/searchgoods/searchgoodschildren1">
							<span>柜36-344</span>
						</el-menu-item>
						<el-menu-item index='/searchgoods/searchgoodschildren'>
							<span>青铜宝剑</span>
						</el-menu-item>
						<el-menu-item index='/searchgoods/searchgoodschildren2'>
							<span>青铜鼎</span>
						</el-menu-item>
					</el-submenu> -->
					</el-submenu>
				</el-submenu>
				<!--2.一级菜单-->
				<el-submenu index="2" >
					<template slot="title">
						<div class="firstmenu">
						<span>2层展厅</span>
						</div>
					</template>
					<!--二级菜单-->
					<el-menu-item index="2-1" >
						<template>
							<span>临展1</span>
						</template>
					</el-menu-item>
					<el-submenu index="2-2">
					<template slot="title">
						<span>临展2</span>
					</template>
					<el-menu-item index="2-2-1">
						<template>
						<span>2021生肖展</span>  
				</template>
					</el-menu-item>
					<el-submenu index="2-2-2">
						<template slot="title">
							<span>江南文化展</span>
						</template>
						<el-menu-item index="2-2-2-1">
							<span>唐丝绸</span>
						</el-menu-item>
						<el-menu-item index='2-2-2-2'>
							<span>石狮</span>
						</el-menu-item>
					</el-submenu>
					</el-submenu>
				</el-submenu>
				<!--3.一级菜单-->
				<el-submenu index="3" >
					<template slot="title">
						<div class="firstmenu">
						<span>3层展厅</span>
						</div>
					</template>
					<!--二级菜单-->
					<el-menu-item index="3-1" >
						<template>
							<span>临展1</span>
						</template>
					</el-menu-item>
					<el-submenu index="3-2">
					<template slot="title">
						<span>临展2</span>
					</template>
					<el-menu-item index="3-2-1">
						<template>
						<span>2021生肖展</span>  
						</template>
					</el-menu-item>
					<el-submenu index="3-2-2">
						<template slot="title">
							<span>江南文化展</span>
						</template>
						<el-menu-item index="3-2-2-1">
							<span>唐丝绸</span>
						</el-menu-item>
						<el-menu-item index='3-2-2-2'>
							<span>石狮</span>
						</el-menu-item>
					</el-submenu>
					</el-submenu>
				</el-submenu>
			</el-menu>
			</div>
		</div>
		<div class="mid">
			<div class="mid1">
				<!--风险统计-->
				<div class="mid1_title">
					风险统计
				</div>
				<!--文字 这个地方需要查询资料，即如何嵌入元素，设置偏移？？-->
				<!-- <div>测试++++++++++++++++</div> -->
				<!--柱状图-->
				<div id="mid1_bar" style="height: 400px;"></div>
			</div>
			<div class="mid2">
				<!--文物清单-->
				<div class="mid2_title">
					文物清单
				</div>
				<!-- le-table 表格 -->
				<div id="mid2_table">
					<el-table
					:data="tableData"
					stripe
					height="336"
					style="width: 662px;height: 336px;">
					<el-table-column
					prop="name"
					label="文物名称"
					width="126">
					</el-table-column>
					<el-table-column
					prop="type"
					label="文物类型"
					width="126">
					</el-table-column>
					<el-table-column
					prop="address"
					label="位置点"
					width="200">
					</el-table-column>
					<el-table-column
					prop="state"
					label="文物状态"
					width="105">
					</el-table-column>
					<el-table-column
					prop="analysis"
					label="风险分析"
					width="105">
					</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="right1">
				<!--历史数据-->
				<div class="right1_title">
					历史数据
				</div>
				<div id="right1_line" style="height: 400px;"></div>
			</div>
			<div class="right2">
				<!--文物占比-->
				<div class="right2_title">
					文物占比
				</div>
				<div id="mid2_bar" style="height: 402px;"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
	return {
		tableData: [{
		name: '石狮',
		type: '石雕',
		address: '1层展厅a展馆032柜头',
		state: '优',
		analysis: '56%'
		}, {
		name: '青铜鼎',
		type: '青铜器',
		address: '1层展厅a展馆033柜头',
		state: '良',
		analysis: '76%'
		}, {
		name: '石狮',
		type: '石雕',
		address: '1层展厅a展馆034柜头',
		state: '中',
		analysis: '43%'
		}, {
		name: '石狮',
		type: '石雕',
		address: '1层展厅a展馆034柜头',
		state: '中',
		analysis: '43%'
		},{
		name: '石狮',
		type: '石雕',
		address: '1层展厅a展馆034柜头',
		state: '中',
		analysis: '43%'
		},{
		name: '石狮',
		type: '石雕',
		address: '1层展厅a展馆034柜头',
		state: '中',
		analysis: '43%'
		}],
		options1: [{
		value: '选项1',
		label: '黄金糕'
		}, {
		value: '选项2',
		label: '双皮奶'
		}, {
		value: '选项3',
		label: '蚵仔煎'
		}, {
		value: '选项4',
		label: '龙须面'
		}, {
		value: '选项5',
		label: '北京烤鸭'
		}],
		value1: '',
		options2: [{
		value: '选项1',
		label: '黄金糕'
		}, {
		value: '选项2',
		label: '双皮奶'
		}, {
		value: '选项3',
		label: '蚵仔煎'
		}, {
		value: '选项4',
		label: '龙须面'
		}, {
		value: '选项5',
		label: '北京烤鸭'
		}],
		value2: ''
	}
  },
  methods: {
	initialBar1 () {
	const myChart = this.$echarts.init(document.getElementById('mid1_bar'))
	const option = {
	// 提示框
	tooltip: {
		trigger: 'axis',
		axisPointer: {
		type: 'shadow'
		}
	},
	// 这个grid组件可以设置其偏移
	grid: {
		show: true,
		left: '3%',
		right: '4%',
		bottom: '10%',
		containLabel: true,
		backgroundColor:'transparent',
		borderWidth: 0.3,
	},
	legend: {
		data: ['优', '良', '中', '差'],
		right: '5%',
		top: '7%'
	},
	xAxis: [
		{
		type: 'category',
		data: ['11-19', '11-20', '11-21', '11-22', '11-23', '11-24', '11-25'],
		// 使坐标轴刻度与标签对齐
		axisTick: {
			alignWithLabel: true
		}
		}
	],
	yAxis: [
		{
		type: 'value',
		name: '',
		max: 100
		},
		{
		type: 'value',
		show: false
		},
		{
		type: 'value',
		show: false
		},
		{
		type: 'value',
		show: false
		}
	],
	series: [
		{
		name: '优',
		type: 'bar',
		barWidth: '10%',
		data: [78, 78, 78, 78, 78, 78, 78],
		color: 'LimeGreen'
		},
		{
		name: '良',
		type: 'bar',
		barWidth: '10%',
		data: [63, 63, 63, 63, 63, 63, 63],
		color: 'Gold'
		},
		{
		name: '中',
		type: 'bar',
		barWidth: '10%',
		data: [22, 22, 22, 22, 22, 22, 22],
		color: 'Orange'
		},
		{
		name: '差',
		type: 'bar',
		barWidth: '10%',
		data: [11, 11, 11, 11, 11, 11, 11],
		color: 'OrangeRed'
		}
	]
	}
	myChart.setOption(option)
	},
	initLine1 () {
	const myChart = this.$echarts.init(document.getElementById('right1_line'))
	const option = {
	xAxis: {
		type: 'category',
		data: ['7月', '8月', '9月', '10月', '11月', '12月']
		},
	yAxis: {
		type: 'value'
		},
	legend: {
		data: ['温度', '湿度', '二氧化碳', '光照', '有机物', '紫外线'],
		right: '5%',
		top: '7%'
	},
	grid: {
		show: true,
		left: '3%',
		right: '4%',
		bottom: '10%',
		containLabel: true,
		backgroundColor:'transparent',
		borderWidth: 0.3,
	},
	series: [
		{
		name: '温度',
		type: 'line',
		data: [102, 130, 102, 93, 108, 133],
		smooth: true
		},
		{
		name: '湿度',
		type: 'line',
		data: [120, 121, 101, 118, 90, 230],
		smooth: true
		},
		{
		name: '二氧化碳',
		type: 'line',
		data: [112, 132, 101, 134, 98, 230],
		smooth: true
		},
		{
		name: '光照',
		type: 'line',
		data: [117, 112, 87, 123, 110, 120],
		smooth: true
		},
		{
		name: '有机物',
		type: 'line',
		data: [90, 109, 101, 90, 90, 230],
		smooth: true
		},
		{
		name: '紫外线',
		type: 'line',
		data: [101, 132, 90, 121, 90, 230],
		smooth: true
		}
		]
		}
		myChart.setOption(option)
	},
	initialBar2 () {
	const myChart = this.$echarts.init(document.getElementById('mid2_bar'))
	const option = {
	// 提示框
	tooltip: {
		trigger: 'axis',
		axisPointer: {
		type: 'shadow'
		}
	},
	// 这个grid组件可以设置其偏移
	grid: {
		show: true,
		left: '3%',
		right: '4%',
		bottom: '10%',
		containLabel: true,
		backgroundColor:'transparent',
		borderWidth: 0.3,
	},
	xAxis: [
		{
		type: 'category',
		data: ['青铜器', '铁器', '丝织品', '漆木器', '纸质', '馆藏壁画'],
		// 使坐标轴刻度与标签对齐
		axisTick: {
			alignWithLabel: true
		}
		}
	],
	yAxis: [
		{
			type: 'value'
		}
	],
	series: [
		{
		type: 'bar',
		barWidth: '27%',
		data: [
		{
		value: 120,
		itemStyle: {
			color: '#6D7FCC'
		}
		},
		{
		value: 200,
		itemStyle: {
			color: '#73C7C0'
		}
		},
		{
		value: 150,
		itemStyle: {
			color: '#C56F82'
		}
		},
		{
		value: 80,
		itemStyle: {
			color: '#89C06A'
		}
		},
		{
		value: 70,
		itemStyle: {
			color: '#A069C7'
		}
		},
		{
		value: 110,
		itemStyle: {
			color: '#D5C83D'
		}
		}
		],
		color: 'LimeGreen'
		}
	]
	}
	myChart.setOption(option)
	}
  },
  mounted () {
	this.initialBar1()
	this.initLine1()
	this.initialBar2()
  }
}
</script>

<style Lang="less" scoped>
.main{
	display: flex;
	flex-direction: row;	
}
.left{
	width: 426px;
	height: 940px;
	margin-left: 24px;
	margin-right: 40px;
	margin-bottom: 24px;
	background-image: url('../assets/image/bg／san.png');
	/* background-color: aqua; */
}
.left_select{
	height: 37px;
	width: 362px;
	margin-top: 24px;
	margin-right: 40px;
	margin-bottom: 24px;
	margin-left: 24px;
	display: flex;
	flex-direction: row;
	
}
.left_select_title{
	display: flex;
	justify-content: center;
	font-size: 16px;
	color: #332F6C;
	font-family: MicrosoftYaHei;
	margin-top: 8px;
}
.left_select_1{
	height: 37px;
	width: 97px;
	margin-left: 5px;
	margin-right: 11px;
	display: flex;
	justify-content: center;
	background-image: url(../assets/image/bg／t.png);
}
/deep/.el-input__inner{
	background-color: #EAEDFC;
}
.left_select_2{
	height: 37px;
	width: 97px;
	display: flex;
	justify-content: center;
	background-image: url(../assets/image/bg／r.png);
}
.left_nav{
	height: 855px;
}
.firstmenu{
	width: 127px;
	height: 44px;
	background-image: url(../assets/image/bg／list_r.png);
	font-size:20px;
	font-family:PingFangSC-Regular, PingFang SC; 
	font-weight: 400; 
	color: black; 
	line-height: 28px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.secondmenu{
	font-size:18px;
	font-family:PingFangSC-Regular, PingFang SC; 
	font-weight: 400; 
	color: black; 
	line-height: 28px;
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
.mid1_title{
	height: 33px;
	display: flex;
	justify-content: center;
	font-size: 24px;
	font-weight: 500;
	font-family: MicrosoftYaHei;
	line-height: 33px;
	padding-top: 24px; /* 注意padding和margin的区别*/
	color: #332F6C;
}
#mid1_bar{
	/* 这里配置的是柱状图，在行内样式配置好了 */
	/* height: 400px !important; */
}
.mid2{
	/* background-color: cyan; */
	height: 459px;
	background-image: url('../assets/image/bg／liu.png');
}
.mid2_title{
	height: 33px;
	display: flex;
	justify-content: center;
	font-size: 24px;
	font-weight: 500;
	font-family: MicrosoftYaHei;
	line-height: 33px;
	padding-top: 24px; /* 注意padding和margin的区别*/
	color: #332F6C;	
}
#mid2_table{
	padding-top: 24px;
	padding-right: 24px;
	padding-bottom: 42px;
	padding-left: 23px;
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
.right1_title{
	height: 33px;
	display: flex;
	justify-content: center;
	font-size: 24px;
	font-weight: 500;
	font-family: MicrosoftYaHei;
	line-height: 33px;
	padding-top: 24px; /* 注意padding和margin的区别*/
	color: #332F6C;
}
#right1_line{
	
}
.right2{
	/* background-color: cyan; */
	height: 459px;
	background-image: url('../assets/image/bg.png');
}
.right2_title{
	height: 33px;
	display: flex;
	justify-content: center;
	font-size: 24px;
	font-weight: 500;
	font-family: MicrosoftYaHei;
	line-height: 33px;
	padding-top: 24px; /* 注意padding和margin的区别*/
	color: #332F6C;	
}
#mid2_bar{
	
}
</style>
