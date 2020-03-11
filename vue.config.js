const path = require('path')

const projectRoot = path.resolve(__dirname)

const baseConfig = {
  lintOnSave: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@': `${projectRoot}/src`
      }
    }
  }
}

//开发环境配置
const devConfig = {
  ...baseConfig
}
const buildConfig = {
  chainWebpack: (config) => {
    /* 添加分析工具*/
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .end();
      config.plugins.delete('prefetch')
    }
  },
  ...baseConfig
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;