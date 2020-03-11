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
  ...baseConfig
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;