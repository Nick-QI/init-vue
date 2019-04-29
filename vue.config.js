const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_a', resolve('src/api'))
      .set('_u', resolve('src/utils'))
      .set('_v', resolve('src/views'))
      .set('_img', resolve('src/assets/img'))
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(), // 自动加兼容性前缀
          pxtorem({
            // px 自动转 rem , 除以100
            rootValue: 100,
            propList: ['*']
          })
        ]
      }
    }
  },
  lintOnSave: true
}
