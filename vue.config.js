// vue.config.js
const path = require('path')
module.exports = {
    devServer: {
        open: true
    },
    pages: {
        index: {
            entry: 'test/main.js',
            template: 'test/public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname, 'packages')).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
}
