#### 表格配置项
```
border: '', 布尔值，默认为true， 是否显示表格边框
width: '', 表格的宽度， 默认为 '100%'
isSelection: '', 是否显示多选框， 默认为false
isRadio: false, 是否单选，默认false
tooltip: '', 当内容过长被隐藏显示tooltip, 默认true


:data="data" 数据数组

:options="options" 类型数组， 列配置项
options: [  * 号为必传项
    {
        label: ''， 列标题 *
        prop: '', 列字段 *
        width: '120', 列宽度， 默认120，
        align: '', 列对齐方式， 默认center
        formatter: (), 格式化方法， 第一个参数为当前行数据， 需要return显示的内容 
        click: true, 当前列是否需要点击事件， 默认false 触发的事件onTdClick， 两个参数 1.当前行的数据 2.当前行的索引
        class: '', 类名， string或者function， function有2个参数，1.当前行的数据 2.当前行的索引， 需要return一个字符串
        slot: '', 插槽名字， 有该配置项表示启用插槽
    }
]


表格事件
@handleSelection="handleSelection" 参数为选中的数组


```

#### 表格操作列配置
```
:operArr="operArr" 数组，详细请看按钮配置
:operWidth="operWidth" 操作列宽度， String | Number
:btnConfig="btnConfig" 操作列的其他配置项，对象
{
    label: '', 操作列标题， 默认操作
    fixed: '', 是否固定定位，默认right， 详见element-ui表格fixed，
    align: '', 内容位置，默认center
}

操作列点击触发
@handleOperClick
    参数有3个：  1. name, 点击按钮的标识名字
                2. row 当前行的数据
                3. index 当前行的索引
```


#### 表格分页配置
```
:isPagination="isPagination" 是否显示分页， 默认true
:page="page" 当前页码， 
:size="size" 当前页条数
:total="total" 表格总条数
page-sizes 和 layout 请到config文件夹下的 constant.js 文件修改
分页事件触发
@onPageChange 参数是一个对象， page代码页面， size代表当前页条数
```
