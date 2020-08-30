const pages = require('./config')
console.log(process.env, 'env')
module.exports = {
  pages: pages,
  assetsDir: 'assets',
  publicPath: './',
  chainWebpack: config => {
    if (process.env.VUE_APP_MODE_ENV === 'production') {
      config.optimization.splitChunks({
        cacheGroups: {
          common: {
            name: 'chunk-common', // 打包后的文件名
            chunks: 'initial',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: -10,
            reuseExistingChunk: true
          }
        }
      })
    }
    for (let [entryName] of config.entryPoints.store) {
      config.plugins.delete(`preload-${entryName}`)
      config.plugins.delete(`prefetch-${entryName}`)
    }
  }
}
