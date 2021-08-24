const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: './',

    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
    },
    // devServer: {
    //     historyApiFallback: true
    // }
    devServer: {
        // host: '192.168.0.65',
        // port: 8080,

        proxy: {
            '/home': {
                target: 'http://101.37.152.149:5000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/home': 'home'
                }
            },
            '/shop': {
                target: 'http://101.37.152.149:5000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/shop': 'shop'
                }
            }
        }
    }
}