#### 表单配置项
```
:options="searchOptions" 数组类型
[
    {
        label: '姓名', 表单名称
        name: 'name', value值对应键名
        type: 'select', input类型，默认为text
        defaultValue: '', 默认显示的值
        options: [], 表单为下拉框的option选项，默认传[], 必传, 默认显示使用字段为label，绑定至为value，
        手动修改使用optionsLabel, optionsValue,
        method: getStatus, 请求数据的方法
        filter: true, 是否可搜索， 默认false
        multiple: true, 是否可多选， 默认false
        clear: true, 是否可清空， 默认false
        rules: [], 验证规则， 详见element-ui表单规则
        format: 'yyyy-MM-dd', 日期选择框的格式，显示格式，默认为'yyyy-MM-dd'
        valueFormat: '', 日期选择框的格式，绑定格式， 默认为'yyyy-MM-dd'
        placeholder: ['开始时间'，'结束时间'], 范围日期框提示信息
    }
]
```

#### 表单label宽度
```
:labelWidth="80" 参数类型为数字或字符串， 默认为100
```

#### 搜索按钮
```
@handleSearch="handleSearch" 方法默认参数为表单数据
```

#### 重置按钮
```
@handleReset="handleReset"
```
#### 单独触发事件
```
方法有一个参数，参数为对象 name代表触发的是哪个input框，value代表当前值

@inputChange="onInputChange", 输入框触发
@selectChange="onSelectChange", 选择框触发
@dateChange="onDateChange", 时间选择器触发
```
