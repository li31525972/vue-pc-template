#### 按钮组配置项
```
:options="options" options为数组
options: [
    {
        label: '删除', 按钮名字
        name: 'handleDelete', 按钮标识
        size: 'small', 按钮大小 默认全局大小
        type: 'success', 按钮类型 默认text
        plain： false, 是否朴素按钮， 默认false
        round: false, 是否圆角按钮， 默认false
        circle: false, 是否圆形按钮， 默认false
        disabled: false, 是否禁用， 默认false
        icon: '', 图标类名， 默认空
        upload: false, 是否是上传组件， 默认false
        fileName: '', 上传文件的字段名， 默认 file
        accept: '', 接受文件上传的类型
        onSuccess: () 成功的回调， 回调具体参数看Element-ui
        onError: () 失败的回调
    }
]
```

#### 点击触发
```
@handleAction="handleAction"

handleAction( name ){}
方法有一个参数，为当前按钮的name值 
```
