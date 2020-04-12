let path = require('path')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}


// 配置项
module.exports = {
    // 默认值是/， 表示项目部署到服务器的根路径， cli2是baseURL，cli3改为publicPath
    publicPath: '/',
    // outputDir 打包生成的生产环境文件的目录, 默认为dist
    outputDir: 'dist',
    // assetsDir 设置生成的静态资源文件的目录（相对于outputDir）
    assetsDir: 'static',
    // indexPath 制定生成的index.html的输出路径(相对于outputDir), 也可以是一个绝对路径
    indexPath: 'index.html',
    // filenameHashing 布尔值，默认true， 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
    filenameHashing: 'true',
    // pages 构建多页面应用
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    // lintOnSave 是否在开发环境下通过eslint在保存时lint代码, 下边是在生产环境时禁用
    // lintOnSave: process.env.NODE_ENV !== 'production',
    lintOnSave: false,
    // transpileDependencies 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: ['vuex-module-decorators'],
    // productionSourceMap 是否生成map文件
    productionSourceMap: false,
    // configureWebpack 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
    // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: config => {
        // 简单/基础配置，比如引入一个新插件
    },
    // chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        // 链式配置
        config.resolve.symlinks(true)
        config.resolve.alias.set('@', resolve('src')).set('components', resolve('src/components'))
    },
    // 配置高于chainWebpack中关于 css loader 的配置, 有需求再配置
    // css: {
    //     // // 是否开启支持 foo.module.css 样式
    //     module: false,
    //     // extract 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
    //     extract: true,
    //     // sourceMap 是否生成map文件，false 将提高构建速度
    //     sourceMap: false,
    //     // loaderOptions css相关的loader传递选项
    //     loaderOptions: {
    //         css: {
    //             // 这里的选项会传递给 css-loader
    //         },
    //         postcss: {
    //             // 这里的选项会传递给 postcss-loader
    //         }
    //     },
    // },
    // devServer 所有 webpack-dev-server 的选项
    devServer: {
        // open 是否自动打开窗口
        open: true,
        // host ip地址
        // host: 'localhost',
        // port 端口号
        port: 4000,
        // https 是否是以https打开网页
        https: false,
        // hotOnly 热更新
        hotOnly: true,
        // proxy 代理
        // proxy: {
        //     "/api": {
        //         target: "http://192.168.1.128:8081",
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite:{
        //             '^/api':''
        //         }
        //     },
        //     "/img": {
        //         target: "https://yuanqu.sit.innoecos.cn/api/aliyun/",
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite:{
        //             '^/img':''
        //         }
        //     },
        // },
        //
    },
    // 第三方插件配置
    pluginOptions: {}
}
