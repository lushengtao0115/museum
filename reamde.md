> 这里主要是对于前端页面整体的统筹，以及页面构建的流程和记录。
>
> 用到啥再去考虑啥。
>
> 各个部分做好记录，以便后续使用



- 首先确定全局样式的分配。因为需要用到饿了么插件，先安装配置。再是路由的安装配置。
- 整体的框架设定：
  - “views文件夹”放主要的页面
  - “components文件夹”放小的中间页面，或是可以复用的组件
  - “Home”页面主要是上面导航栏部分，各个部分都是相同的。
- Home页面上的导航栏
  - 初步认为3可以写成几个div盒子，在里面放置图标，以及各自名称，通过点击，绑定路由，改变颜色
- Home页面下的部分为各个的页面，例如设定一个页面为homeman，首先要规划好页面布局。这里的暂时设定如下（参照设计图吧）。
- 风险统计部分：柱状图（几个）
  - 
- 文物清单部分：折线图
- 历史数据部分：表格
- 文物占比部分：柱状图（单个、
- 

### 2021/12/22

- 后续是主要确定那几个图表。以及做好记录。


### 2021/12/23

- toolbox的使用

- 风险统计（多柱状图）

  - 需要提示框  // 提示框

    ```javascript
      // 提示框
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
    ```

  - grid组件(设置组件偏移)

    ```javascript
      // 这个grid组件可以设置其偏移
      // 设置边框(show:true)
      grid: {
        show: true,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        backgroundColor:'transparent',
        borderWidth: 0.1,
      },
    ```

  - legend设置上面的图标

    ```javascript
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
    ```

  - 如何在元素里嵌入显示（即这个图片的文字提示部分<mark>?</mark>）

- 历史数据（多折线图）

  - ++

- 文物清单（element表格）

  - 斑马纹:`stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。
  - 竖直方向边框：默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用。
  - 固定表头：当纵向内容过多时，可选择固定表头。只要在`el-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。（这个在外面写height）
  - 如何去掉右边的条。<mark>?</mark>
  - 表格背景颜色。<mark>?</mark>

- 文物占比

  - 单个柱子设定颜色：

    ```javascript
      series: [
        {
          data: [
            120,
            {
              value: 200,
              itemStyle: {
                color: '#a90000'
              }
            },
            150,
            80,
            70,
            110,
            130
          ],
          type: 'bar'
        }
      ]
    ```

  - 后续颜色渐变设计（有，但是需要研究合适）<mark>?</mark>

- 最左边，位置导航

  - 草图
    ![位置导航图](C:\Users\hp\Desktop\位置导航.jpg)
  - 最上面当前位置应该使用Select选择器：这里需要设置其背景颜色，直接设置不生效，需要F11调试找到其原本样式，使用/deep/调试才会生效
  - 下面是NavMenu 导航菜单：这里继续使用之前的几级菜单写法？还是可以改进部分<mark>？</mark>
  - 字体设置部分<mark>?</mark>

### 2021/12/24

- 待完成：主页+副页的优化
- 主页的整体布局规划：
  - 已经基本完成
- +++待补充+++

