/*
* @file 手动实现持久化插件 -> 目前只做了持久化以及数据的显示和隐藏， !!!期望后期加入手动存储想存的数据
* @date 2020-04-15
* @author YaHui Li
* 参数  1. options 配置项
*               hidden  是否隐藏数据
*       2. storage 存储位置
*       3. 存储的key
*/

export default (options, storage, key) => (store) => {
    options = options || {}
    storage = storage || options.storage || window && window.sessionStorage
    key = key && typeof key === 'string' || options.key && typeof key === 'string' || 'state'

    // 用于将本地存储中的数据赋值给vuex中的state -> 搭配
    if (storage.getItem(key)) {
        store.replaceState(JSON.parse(storage.getItem(key)))

        options.hidden && storage.removeItem(key)

    }
    // 监听页面离开、刷新事件将数据存储在sessionStorage
    window.onunload = () => {

        storage.setItem(key, JSON.stringify(store.state))
    }

    store.subscribe((mutation, state) => {


    })
}
