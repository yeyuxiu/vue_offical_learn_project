const path = require("path");
// const { VueLoaderPlugin } = require('vue-loader')

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: './',
    chainWebpack: (config) => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.whitespace = '' // 修改的地方
                return options
            })

        // 修改访问文件的路径
        config.resolve.alias
            .set("@", resolve("src"))

        // 修复HMR
        // config.resolve.symlinks(true);
    },
    devServer: {
        // host: '192.168.0.65',
        // port: 8080,
        // historyApiFallback: true,
        // https: false
        // open: true 自动启动浏览器
        proxy: {
            '/newsData': {
                target: 'http://101.37.152.149:5000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/newsData': 'newsData'
                }
            },
            '/resign': {
                target: 'http://101.37.152.149:5000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/resign': 'resign'
                }
            },
            '/login': {
                target: 'http://101.37.152.149:5000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/login': 'login'
                }
            },
            '/checkResign': {
                target: 'http://101.37.152.149:5000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/checkResign': 'checkResign'
                }
            }
        }
    },

    /* 说明
    module.exports = {

      baseUrl: './', // 默认'/'，部署应用包时的基本 URL
      outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
      assetsDir: '',  // 相对于outputDir的静态资源(js、css、img、fonts)目录
      lintOnSave: false,
      runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
      productionSourceMap: false,  // 生产环境的 source map


    }
     */



}