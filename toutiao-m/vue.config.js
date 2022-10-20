const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // proxyTable: {
  //   '/api': {
  //     target: 'http://localhost:8081/',//目标接口域名
  //     changeOrigin: true,//是否跨域
  //     pathRewrite: {
  //       '^/api': ''//重写接口,后面可以使用重写的新路径，一般不做更改
  //     }
  //   }
  // }
})
