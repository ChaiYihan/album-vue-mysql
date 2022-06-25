const { defineConfig } = require('@vue/cli-service')

const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

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
