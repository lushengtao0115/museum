<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<!-- 测试 -->
		<!-- <div id="map" style="width: 500px; height: 500px;"></div> -->
		<div id="museum1" style="width: 500px; height: 500px;"></div>
		<div id="museum2" style="width: 500px; height: 500px;"></div>
		<div id="museum3" style="width: 500px; height: 500px;"></div>
		<div id="museum4" style="width: 500px; height: 500px;"></div>
	</div>
</template>

<script>
	export default {
		methods: {
			// 以下的作为实例讲解部分
			async initMap() {

				var chartDom = document.getElementById('map');
				var myChart = this.$echarts.init(chartDom);
				var option;

				const {
					data: res
				} = await this.$http.get(
					// 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg'
					// 'http://101.132.96.7:8080/shanghaimuseum/img/Beef_cuts_France.svg'
					'https://lushengtao0115.github.io/Beef_cuts_France.svg'
				);
				console.log(res);

				// 加一个判断svg的
				if (res != undefined) {
					console.log("===2===");
					this.$echarts.registerMap('Beef_cuts_France', {
						svg: res
					});
				}

				// 在option中配置所需项目
				option = {

					// colorBy: 'data', // 默认serise，可选择为data

					tooltip: {}, // 默认配置提示框

					// visualMap是视觉映射组件
					/* 这里可以借鉴一下由series数据大小映射颜色的方法，但是不一定用这种方法 
					可以使用每个馆，通过数据映射来显示每个馆的颜色(这里需要设定一个合理的机制)
					*/
					// visualMap: {
					// 	// left: 'center',
					// 	// bottom: '10%',
					// 	min: 5,
					// 	max: 100,
					// 	// orient: 'horizontal',
					// 	// text: ['', 'Price'],
					// 	// realtime: true,
					// 	// calculable: true,
					// 	inRange: {
					// 		color: ['#dbac00', '#db6e00', '#cf0000']
					// 	}
					// },

					series: [{

						name: 'French Beef Cuts', // 起个名字
						type: 'map', // 设置为地图类型
						map: 'Beef_cuts_France', // 使用这个地图

						// roam: true, // 鼠标缩放，平移功能

						// 高亮状态下的多边形和标签样式。
						/* 这里是高亮情况下的一些设置，属性较多，后面可能需要实验 
						不设置即默认
						后续还需要解决：放置在上面背景颜色的更改*/
						emphasis: {
							label: {
								/* 这里应该不需要 */
								show: false, // 是否显示标签
								position: 'top',
								rotate: 90,
								color: '#cf0000'
							},
							/* itemStyle指的是 */
							itemStyle: {
								areaColor: '#cf0000', // 地图区域的颜色(高亮时的颜色)
								color: '#0000ff', // ???图形的颜色(如下)（这里修改不了）
								borderColor: '#000', // 每个小块图形的轮廓颜色
								opacity: 1 // 透明度设置，这个地方改变了高亮时的颜色
							}
						},

						// 选中模式，表示是否支持多个选中
						selectedMode: false,

						// 给对应的块赋值
						/* 
						地图系列的数据内容数组，数组项可以为单个数值
						如果需要在数据中加入其它维度给 visualMap 组件用来映射到颜色等其它图形属性。每个数据项也可以是数组
						这时候可以将每项数组中的第二个值指定给 visualMap 组件。
						更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象。
						
						name 数据所对应的地图区域的名称
						number 该区域的数据值
						selected 该区域是否选中
						** itemStyle 该数据所在区域的多边形样式设置
							
						** label 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
						** emphasis 该数据所在区域的多边形高亮状态
						** select 该数据所在区域的多边形选中状态
						* tooltip 本系列每个数据项中特定的 tooltip 设定。 
						 */
						data: [{
								name: 'Queue',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: '#000', // 可以通过这个来设置小块地图区域的颜色
									color: '#cf0000', // 这个颜色暂时是干什么的还不知道
									opacity: 1, // 透明度，对区域有影响
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: 'transparent'
									}
								}
							},
							{
								name: 'Langue',
								value: 35
							},
							{
								name: 'Plat de joue',
								value: 15
							},
							{
								name: 'Gros bout de poitrine',
								value: 25
							},
							{
								name: 'Jumeau à pot-au-feu',
								value: 45
							},
							{
								name: 'Onglet',
								value: 85
							},
							{
								name: 'Plat de tranche',
								value: 25
							},
							{
								name: 'Araignée',
								value: 15
							},
							{
								name: 'Gîte à la noix',
								value: 55
							},
							{
								name: "Bavette d'aloyau",
								value: 25
							},
							{
								name: 'Tende de tranche',
								value: 65
							},
							{
								name: 'Rond de gîte',
								value: 45
							},
							{
								name: 'Bavettede de flanchet',
								value: 85
							},
							{
								name: 'Flanchet',
								value: 35
							},
							{
								name: 'Hampe',
								value: 75
							},
							{
								name: 'Plat de côtes',
								value: 65
							},
							{
								name: 'Tendron Milieu de poitrine',
								value: 65
							},
							{
								name: 'Macreuse à pot-au-feu',
								value: 85
							},
							{
								name: 'Rumsteck',
								value: 75
							},
							{
								name: 'Faux-filet',
								value: 65
							},
							{
								name: 'Côtes Entrecôtes',
								value: 55
							},
							{
								name: 'Basses côtes',
								value: 45
							},
							{
								name: 'Collier',
								value: 85
							},
							{
								name: 'Jumeau à biftek',
								value: 15
							},
							{
								name: 'Paleron',
								value: 65
							},
							{
								name: 'Macreuse à bifteck',
								value: 45
							},
							{
								name: 'Gîte',
								value: 85
							},
							{
								name: 'Aiguillette baronne',
								value: 65
							},
							{
								name: 'Filet',
								value: 95
							}
						]
					}]
				};
				myChart.setOption(option);
			},

			// 博物馆图绘制
			async initMuseum1() {

				var chartDom = document.getElementById('museum1');
				var myChart = this.$echarts.init(chartDom);
				var option;
				var color1 = "#cf0000";
				var color2 = "#55cf29";
				var color3 = "#55cf29";
				var color4 = "#cfc559";
				var color5 = "#ffff00";
				
				const {
					data: res
				} = await this.$http.get(
					// 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg'
					// 'http://101.132.96.7:8080/shanghaimuseum/img/Beef_cuts_France.svg'
					'https://lushengtao0115.github.io/museum1_450_440.svg'
				);
				console.log(res);

				// 加一个判断svg的
				if (res != undefined) {
					console.log("===2===");
					this.$echarts.registerMap('Museum', {
						svg: res
					});
				}

				// 在option中配置所需项目
				option = {

					// colorBy: 'data', // 默认serise，可选择为data

					tooltip: {
						show: true
					}, // 默认配置提示框

					// visualMap是视觉映射组件
					/* 这里可以借鉴一下由series数据大小映射颜色的方法，但是不一定用这种方法 
					可以使用每个馆，通过数据映射来显示每个馆的颜色(这里需要设定一个合理的机制)
					*/
					// visualMap: {
					// 	// left: 'center',
					// 	// bottom: '10%',
					// 	min: 5,
					// 	max: 100,
					// 	// orient: 'horizontal',
					// 	// text: ['', 'Price'],
					// 	// realtime: true,
					// 	// calculable: true,
					// 	inRange: {
					// 		color: ['#dbac00', '#db6e00', '#cf0000']
					// 	}
					// },

					series: [{

						name: '文物风险状况', // 起个名字
						type: 'map', // 设置为地图类型
						map: 'Museum', // 使用这个地图

						// roam: true, // 鼠标缩放，平移功能

						// 高亮状态下的多边形和标签样式。
						/* 这里是高亮情况下的一些设置，属性较多，后面可能需要实验 
						不设置即默认
						后续还需要解决：放置在上面背景颜色的更改*/

						emphasis: {
							label: {
								/* 这里应该不需要 */
								show: false, // 是否显示标签
								position: 'top',
								rotate: 90,
								color: '#eaeaea'
							},
							/* itemStyle指的是 */
							itemStyle: {
								areaColor: '#eaeaea', // 地图区域的颜色(高亮时的颜色)
								color: '#0000ff', // ???图形的颜色(如下)（这里修改不了）
								borderColor: '#000', // 每个小块图形的轮廓颜色
								opacity: 1 // 透明度设置，这个地方改变了高亮时的颜色
							}
						},

						// 选中模式，表示是否支持多个选中
						selectedMode: false,

						// 给对应的块赋值
						/* 
						地图系列的数据内容数组，数组项可以为单个数值
						如果需要在数据中加入其它维度给 visualMap 组件用来映射到颜色等其它图形属性。每个数据项也可以是数组
						这时候可以将每项数组中的第二个值指定给 visualMap 组件。
						更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象。
						
						name 数据所对应的地图区域的名称
						number 该区域的数据值
						selected 该区域是否选中
						** itemStyle 该数据所在区域的多边形样式设置
							
						** label 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
						** emphasis 该数据所在区域的多边形高亮状态
						** select 该数据所在区域的多边形选中状态
						* tooltip 本系列每个数据项中特定的 tooltip 设定。 
						 */
						data: [{
								name: 'room1',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color1, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color1
									}
								}
							},
							{
								name: 'room2',
								value: 30,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color2, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color2
									}
								}
							},
							{
								name: 'room3',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color3, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color3
									}
								}
							},
							{
								name: 'room4',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color4, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color4
									}
								}
							},
							{
								name: 'room5',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color5, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color5
									}
								}
							},
						]
					}]
				};
				myChart.setOption(option);
			},
			async initMuseum2() {
			
				var chartDom = document.getElementById('museum2');
				var myChart = this.$echarts.init(chartDom);
				var option;
				var color1 = "#cf0000";
				var color2 = "#55cf29";
				var color3 = "#55cf29";
				var color4 = "#cfc559";
				var color5 = "#ffff00";
				
				const {
					data: res
				} = await this.$http.get(
					// 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg'
					// 'http://101.132.96.7:8080/shanghaimuseum/img/Beef_cuts_France.svg'
					'https://lushengtao0115.github.io/museum2_440_430.svg'
				);
				console.log(res);
			
				// 加一个判断svg的
				if (res != undefined) {
					console.log("===2===");
					this.$echarts.registerMap('Museum', {
						svg: res
					});
				}
			
				// 在option中配置所需项目
				option = {
			
					// colorBy: 'data', // 默认serise，可选择为data
			
					tooltip: {
						show: true
					}, // 默认配置提示框
			
					// visualMap是视觉映射组件
					/* 这里可以借鉴一下由series数据大小映射颜色的方法，但是不一定用这种方法 
					可以使用每个馆，通过数据映射来显示每个馆的颜色(这里需要设定一个合理的机制)
					*/
					// visualMap: {
					// 	// left: 'center',
					// 	// bottom: '10%',
					// 	min: 5,
					// 	max: 100,
					// 	// orient: 'horizontal',
					// 	// text: ['', 'Price'],
					// 	// realtime: true,
					// 	// calculable: true,
					// 	inRange: {
					// 		color: ['#dbac00', '#db6e00', '#cf0000']
					// 	}
					// },
			
					series: [{
			
						name: '文物风险状况', // 起个名字
						type: 'map', // 设置为地图类型
						map: 'Museum', // 使用这个地图
			
						// roam: true, // 鼠标缩放，平移功能
			
						// 高亮状态下的多边形和标签样式。
						/* 这里是高亮情况下的一些设置，属性较多，后面可能需要实验 
						不设置即默认
						后续还需要解决：放置在上面背景颜色的更改*/
			
						emphasis: {
							label: {
								/* 这里应该不需要 */
								show: false, // 是否显示标签
								position: 'top',
								rotate: 90,
								color: '#eaeaea'
							},
							/* itemStyle指的是 */
							itemStyle: {
								areaColor: '#eaeaea', // 地图区域的颜色(高亮时的颜色)
								color: '#0000ff', // ???图形的颜色(如下)（这里修改不了）
								borderColor: '#000', // 每个小块图形的轮廓颜色
								opacity: 1 // 透明度设置，这个地方改变了高亮时的颜色
							}
						},
			
						// 选中模式，表示是否支持多个选中
						selectedMode: false,
			
						// 给对应的块赋值
						/* 
						地图系列的数据内容数组，数组项可以为单个数值
						如果需要在数据中加入其它维度给 visualMap 组件用来映射到颜色等其它图形属性。每个数据项也可以是数组
						这时候可以将每项数组中的第二个值指定给 visualMap 组件。
						更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象。
						
						name 数据所对应的地图区域的名称
						number 该区域的数据值
						selected 该区域是否选中
						** itemStyle 该数据所在区域的多边形样式设置
							
						** label 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
						** emphasis 该数据所在区域的多边形高亮状态
						** select 该数据所在区域的多边形选中状态
						* tooltip 本系列每个数据项中特定的 tooltip 设定。 
						 */
						data: [{
								name: 'room1',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color1, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color1
									}
								}
							},
							{
								name: 'room2',
								value: 30,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color2, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color2
									}
								}
							},
							{
								name: 'room3',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color3, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color3
									}
								}
							},
							{
								name: 'room4',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color4, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color4
									}
								}
							},
							{
								name: 'room5',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color5, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color5
									}
								}
							},
						]
					}]
				};
				myChart.setOption(option);
			},
			async initMuseum3() {

				var chartDom = document.getElementById('museum3');
				var myChart = this.$echarts.init(chartDom);
				var option;
				var color1 = "#cf0000";
				var color2 = "#55cf29";
				var color3 = "#55cf29";
				var color4 = "#cfc559";
				var color5 = "#ffff00";
				
				const {
					data: res
				} = await this.$http.get(
					// 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg'
					// 'http://101.132.96.7:8080/shanghaimuseum/img/Beef_cuts_France.svg'
					'https://lushengtao0115.github.io/museum3_430_420.svg'
				);
				console.log(res);

				// 加一个判断svg的
				if (res != undefined) {
					console.log("===2===");
					this.$echarts.registerMap('Museum', {
						svg: res
					});
				}

				// 在option中配置所需项目
				option = {

					// colorBy: 'data', // 默认serise，可选择为data

					tooltip: {
						show: true
					}, // 默认配置提示框

					// visualMap是视觉映射组件
					/* 这里可以借鉴一下由series数据大小映射颜色的方法，但是不一定用这种方法 
					可以使用每个馆，通过数据映射来显示每个馆的颜色(这里需要设定一个合理的机制)
					*/
					// visualMap: {
					// 	// left: 'center',
					// 	// bottom: '10%',
					// 	min: 5,
					// 	max: 100,
					// 	// orient: 'horizontal',
					// 	// text: ['', 'Price'],
					// 	// realtime: true,
					// 	// calculable: true,
					// 	inRange: {
					// 		color: ['#dbac00', '#db6e00', '#cf0000']
					// 	}
					// },

					series: [{

						name: '文物风险状况', // 起个名字
						type: 'map', // 设置为地图类型
						map: 'Museum', // 使用这个地图

						// roam: true, // 鼠标缩放，平移功能

						// 高亮状态下的多边形和标签样式。
						/* 这里是高亮情况下的一些设置，属性较多，后面可能需要实验 
						不设置即默认
						后续还需要解决：放置在上面背景颜色的更改*/

						emphasis: {
							label: {
								/* 这里应该不需要 */
								show: false, // 是否显示标签
								position: 'top',
								rotate: 90,
								color: '#eaeaea'
							},
							/* itemStyle指的是 */
							itemStyle: {
								areaColor: '#eaeaea', // 地图区域的颜色(高亮时的颜色)
								color: '#0000ff', // ???图形的颜色(如下)（这里修改不了）
								borderColor: '#000', // 每个小块图形的轮廓颜色
								opacity: 1 // 透明度设置，这个地方改变了高亮时的颜色
							}
						},

						// 选中模式，表示是否支持多个选中
						selectedMode: false,

						// 给对应的块赋值
						/* 
						地图系列的数据内容数组，数组项可以为单个数值
						如果需要在数据中加入其它维度给 visualMap 组件用来映射到颜色等其它图形属性。每个数据项也可以是数组
						这时候可以将每项数组中的第二个值指定给 visualMap 组件。
						更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象。
						
						name 数据所对应的地图区域的名称
						number 该区域的数据值
						selected 该区域是否选中
						** itemStyle 该数据所在区域的多边形样式设置
							
						** label 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
						** emphasis 该数据所在区域的多边形高亮状态
						** select 该数据所在区域的多边形选中状态
						* tooltip 本系列每个数据项中特定的 tooltip 设定。 
						 */
						data: [{
								name: 'room1',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color1, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color1
									}
								}
							},
							{
								name: 'room2',
								value: 30,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color2, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color2
									}
								}
							},
							{
								name: 'room3',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color3, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color3
									}
								}
							},
							{
								name: 'room4',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color4, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color4
									}
								}
							},
							{
								name: 'room5',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color5, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color5
									}
								}
							},
						]
					}]
				};
				myChart.setOption(option);
			},
			async initMuseum4() {

				var chartDom = document.getElementById('museum4');
				var myChart = this.$echarts.init(chartDom);
				var option;
				var color1 = "#cf0000";
				var color2 = "#55cf29";
				var color3 = "#55cf29";
				var color4 = "#cfc559";
				var color5 = "#ffff00";
				
				const {
					data: res
				} = await this.$http.get(
					// 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg'
					// 'http://101.132.96.7:8080/shanghaimuseum/img/Beef_cuts_France.svg'
					'https://lushengtao0115.github.io/museum4_440_430.svg'
				);
				console.log(res);

				// 加一个判断svg的
				if (res != undefined) {
					console.log("===2===");
					this.$echarts.registerMap('Museum', {
						svg: res
					});
				}

				// 在option中配置所需项目
				option = {

					// colorBy: 'data', // 默认serise，可选择为data

					tooltip: {
						show: true
					}, // 默认配置提示框

					// visualMap是视觉映射组件
					/* 这里可以借鉴一下由series数据大小映射颜色的方法，但是不一定用这种方法 
					可以使用每个馆，通过数据映射来显示每个馆的颜色(这里需要设定一个合理的机制)
					*/
					// visualMap: {
					// 	// left: 'center',
					// 	// bottom: '10%',
					// 	min: 5,
					// 	max: 100,
					// 	// orient: 'horizontal',
					// 	// text: ['', 'Price'],
					// 	// realtime: true,
					// 	// calculable: true,
					// 	inRange: {
					// 		color: ['#dbac00', '#db6e00', '#cf0000']
					// 	}
					// },

					series: [{

						name: '文物风险状况', // 起个名字
						type: 'map', // 设置为地图类型
						map: 'Museum', // 使用这个地图

						// roam: true, // 鼠标缩放，平移功能

						// 高亮状态下的多边形和标签样式。
						/* 这里是高亮情况下的一些设置，属性较多，后面可能需要实验 
						不设置即默认
						后续还需要解决：放置在上面背景颜色的更改*/

						emphasis: {
							label: {
								/* 这里应该不需要 */
								show: false, // 是否显示标签
								position: 'top',
								rotate: 90,
								color: '#eaeaea'
							},
							/* itemStyle指的是 */
							itemStyle: {
								areaColor: '#eaeaea', // 地图区域的颜色(高亮时的颜色)
								color: '#0000ff', // ???图形的颜色(如下)（这里修改不了）
								borderColor: '#000', // 每个小块图形的轮廓颜色
								opacity: 1 // 透明度设置，这个地方改变了高亮时的颜色
							}
						},

						// 选中模式，表示是否支持多个选中
						selectedMode: false,

						// 给对应的块赋值
						/* 
						地图系列的数据内容数组，数组项可以为单个数值
						如果需要在数据中加入其它维度给 visualMap 组件用来映射到颜色等其它图形属性。每个数据项也可以是数组
						这时候可以将每项数组中的第二个值指定给 visualMap 组件。
						更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象。
						
						name 数据所对应的地图区域的名称
						number 该区域的数据值
						selected 该区域是否选中
						** itemStyle 该数据所在区域的多边形样式设置
							
						** label 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
						** emphasis 该数据所在区域的多边形高亮状态
						** select 该数据所在区域的多边形选中状态
						* tooltip 本系列每个数据项中特定的 tooltip 设定。 
						 */
						data: [{
								name: 'room1',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color1, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color1
									}
								}
							},
							{
								name: 'room2',
								value: 30,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color2, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color2
									}
								}
							},
							{
								name: 'room3',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color3, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color3
									}
								}
							},
							{
								name: 'room4',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color4, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color4
									}
								}
							},
							{
								name: 'room5',
								value: 15,
								itemStyle: { // 该数据所在区域的多边形样式设置
									areaColor: color5, // 可以通过这个来设置小块地图区域的颜色
									color: 'black', // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
									opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
								},
								selected: false, // 该区域是否选中，没看到具体作用
								label: { // 图形上的文本标签
									show: false // 这个应该不需要使用
								},
								emphasis: { // 该数据所在区域的多边形高亮状态
									itemStyle: {
										/* 这里高亮时候设置颜色，解决方案有以下：
										 1.找到方案不改变颜色
										 2.设定变量获取本身的颜色*/
										areaColor: color5
									}
								}
							},
						]
					}]
				};
				myChart.setOption(option);
			}
		},
		mounted() {
			// this.initMap()
			this.initMuseum1()
			this.initMuseum2()
			this.initMuseum3()
			this.initMuseum4()
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
