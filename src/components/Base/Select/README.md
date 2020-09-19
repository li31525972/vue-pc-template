# 下拉框
## 下拉框配置项
[请看Element官网(驼峰命名)](https://element.eleme.cn/#/zh-CN/component/select)
```xlsx
其它配置
props: {
    label: 'label',
    value: 'value',
},
```

## 对于下拉框的扩展
### 远程搜索
```xlsx
方法1(不使用箭头函数)
{
    label: '状态',
    name: 'status',
    element: 'select',
    remote: true,
    filterable: true,
    options: [], // 必须添加
    remoteMethod: function(str) { // 参数为当前输入的内容
    
    // 直接将数据放到当前options里就行
    api.getStatus(str).then(response => {
        if (response.code === 0) {
            
            this.options = response.data
        }
    })
    },
    props: {
        label: 'label',
        value: 'value',
    },
}

方法2(使用$set 如果是js文件引入Vue)
```xlsx
{
    label: '状态',
    name: 'status',
    element: 'select',
    remote: true,
    filterable: true,
    // 1.参数为当前输入的内容 2.当前配置项
    remoteMethod: (str, options) => { 
    
    
    api.getStatus(str).then(response => {
        if (response.code === 0) {
        // 使用Vue.$set将数据放到当前配置项的options里就行
            Vue.$set(options, 'options', response.data)
        }
    })
    },
    props: {
        label: 'label',
        value: 'value',
    },
}
```
