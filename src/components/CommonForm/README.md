#### 表单配置项
```
:options="searchOptions" 数组类型
[
    {
        label: '姓名', 表单名称
        name: 'name', 字段名
        defaultValue: '小明', 默认值
        type: 'select', input类型，默认为text
        options: [], 表单为下拉框的option选项, 默认显示使用字段为label，绑定至为value，
        手动修改使用optionsLabel, optionsValue,
        method: getStatus, 请求数据的方法
        filter: true, 是否可搜索， 默认false
        multiple: true, 是否可多选， 默认false
        clear: true, 是否可清空， 默认false
        rules: [], 验证规则， 详见element-ui表单规则
        format: 'yyyy-MM-dd', 日期选择框的格式，显示格式，默认为'yyyy-MM-dd'
        valueFormat: '', 日期选择框的格式，绑定格式， 默认为'yyyy-MM-dd'
        placeholder: ['开始时间'，'结束时间'], 范围日期框提示信息
        flex: 1, 在一行占几份，默认一行4份占1份
    }
]
```

#### 表单label宽度
```
:labelWidth="80" 参数类型为数字或字符串， 默认为100
```

#### 表单一行显示几个
```
flex="4" 参数类型为数字或字符串, 默认一行显示4个表单
```

#### 手动获取表单数据
```
方法1 获取当前form表单中的数据
this.$refs['组件'].params

方法2 获取当前form表单中的数据带默认数据
this.$refs['组件'].getFormData(true)
```

#### 表单数据源
```
:formData="searchParams" 表单回显数据
```

#### 事件(参考ElementUI)
```
方法有一个参数，参数为对象:
    name代表触发的是哪个input框
    value代表当前值
    options为当前选中项的数据


```
### 手动改变表单中的值
```xlsx
方法1(可以改变多个)
let params = {
    name: '小明', // 意思是修改表单中字段name的值为 '小明'
}
this.$refs['组件'].changeFormData(params)

方法2(仅能改变单个)
let element = this.$refs['组件']
this.$set(element.params, 'name', '小明')
```

### 手动改变表单配置项的值(用于表单联动效果, 如：禁用、表单的根据条件隐藏)
```
let element = this.$refs['组件'].currentOptions
this.$set(element.name, 'hidden', false)
```
