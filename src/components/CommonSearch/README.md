# 搜索组件

### 下拉框等类型控件获取数据的方法(对于该控件本身的操作请看该控件的README)
```xlsx
//

第一种(默认获取 response.data)
{
    label: '状态',
    name: 'status',
    element: 'select',
    method: api.getStatus, 获取数据的方法(默认)
    params: '63', 参数
    props: {
        label: 'dropDownValue',
        value: 'dropDownKey',
    },
}

第二种(自定义获取数据) customMethod 函数类型 return 一个Promise promise返回数据列表
{
    label: '状态',
    name: 'status',
    element: 'select',
    customMethod: (options) => {
        // options 为当前配置对象
        return api.getStatus('63').then(response => {
            if (response.code === 0) {
                
                return response.data
            }
        })
    },
    props: {
        label: 'dropDownValue',
        value: 'dropDownKey',
    },
}
```
