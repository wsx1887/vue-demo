module.exports = {
    pages: {
        'vueapp/vueapp': {
            entry: 'src/pages/vueapp/main.js',
            template: 'public/index.html',
            filename: '个人练习VUE版.html',
            title: '个人练习VUE版'
        },
        'zhihuribao/zhihuribao': {
            // page 的入口
            entry: 'src/pages/zhihu-ribao/entry.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: '知乎日报网页版.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '知乎日报网页版',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'zhihu-ribao/知乎日报网页版'],

        },
        'shopping/shopping': {
            entry: './src/pages/shopping/entry.js',
            template: './public/index.html',
            filename: '电商网站实例.html',
            title: '电商网站实例'
        }
    }
}