const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8090,
  },
  chainWebpack: (config) =>{
    config.resolve.alias
      .set('@assets', resolve('./src/assets'))
  },
})
