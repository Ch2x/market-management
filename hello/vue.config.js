const path = require('path')

const projectRoot = path.resolve(__dirname)

module.exports = {
  lintOnSave: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@': `${projectRoot}/src`
      }
    }
  }
}
