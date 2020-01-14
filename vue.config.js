//解决跨域问题
let proxyObj = {};


proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathRewrite: {
        '^/': ''
    }
}

module.export={
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    }
}
