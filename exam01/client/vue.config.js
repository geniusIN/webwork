const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer : {
    proxy : {
      '^/api' : {
        target,
        changeOrigin : true,
        ws : false,
        pathRewrite : { '^/api' :'/' }
      }
    }
  }
})