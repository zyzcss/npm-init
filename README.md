# cybertron-ui


# 编写组件的CSS
### 样式目录结构
|--src
    |-- styles
      |-- index.less
      |-- index.ts
      |-- utilities.less
      |-- variables.less
    |-- button
      |-- styles
            |-- index.less
            |-- index.ts

### 命名结构
```
// 1. 所有组件基本结构 项目前缀 + 组件名称
.@{prefix}btn {}

// 2. 组件内部结构命名使用 - 
.@{prefix}btn-text {}

// 3. 如果组件较为复杂，做了拆分（多组件）,使用下划线做区分
// 按钮的下拉部分
.@{prefix}btn_dropdown {}
// 下拉按钮
.@{prefix}btn-dropdown {}

// 4. 使用 -- 表示组件不同状态
.@{prefix}btn--active {}

// 5. 组合多类
className={classNames('btn','btn-dropdown')}
```
### css属性规范
老项目直接复制过来吧
属性改成变量方便统一

### 编写
```
import { getClassName } from '../utils';
getClassName('button','inner')
getClassName('button','active')
getClassName('button','','addon')

```
```
@import '../../styles/variables';
.@{prefix}button {
  color: @primary-color;
}
```
### 和现有项目结合
项目中使用的基础组件任然用antd的
颜色使用antd的配置
input,select,button高度字体等，因为项目样式方案不统一，所以高度尺寸配置后影响可能比较大，需要一一验证
特殊尺寸不配置antd，如filter组件中表单的更小，直接使用组合/覆盖的方式。

# 组件列表
antd 作为 base库
大部分组就按不需要另外开发
### 基础ui
- 图标（多模式:默认，表格按钮,）
- 标题(多模式)
- 卡片
- 面包屑
- 文字省略


### 基础布局
- 框架头部
- 头部信息

### 扩展antd
- 表格
- 搜索过滤
- 信息框
- 弹窗
- 表单配置
- 按钮(下拉，下拉菜单)
- 年份选择器
- 文件上传
- 

### 复用逻辑组件(HOC)
- 下拉滚动select(withScrollSearch)
- 扁平展示select(withTagsSearch)
- 复制
- 下载
- 展开收起

### 业务组件
- 基础数据检测
- 导入按钮
- 高级搜索弹窗
