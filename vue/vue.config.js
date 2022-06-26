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
	  client: {
		  webSocketURL: 'ws://0.0.0.0:8090/ws',
	}
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@assets', resolve('./src/assets'))
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
})
