const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
// const url = 'http://192.168.25.56:9999';
// const url = 'http://192.168.28.220:9999';
const url = 'http://192.168.28.17:9999'
// const url = 'http://192.168.28.153:9999'//正式环境
// const url = 'http://192.168.25.217:5000';  //朝阳
// const url = 'http://192.168.25.34:9999' //
// const mockUrl = 'http://192.168.28.220:36744'
module.exports = {
  lintOnSave: true,
  
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  chainWebpack: config => {
    // 忽略的打包文件
    config.externals({
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      vant: 'vant'
    })
    const entry = config.entry('app')
    entry.add('babel-polyfill').end()
    entry.add('classlist-polyfill').end()
    config.resolve.alias
    .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    .set('_c', resolve('src/components'))
  },
  // 配置转发代理
  devServer: {
    proxy: {
      '/auth': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/auth': '/auth'
        }
      },
      '/admin': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/admin': '/admin'
        }
      },
      '/code': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/code': '/code'
        }
      },
      '/gen': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/gen': '/gen'
        }
      },
      '/demonstration': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/demonstration': '/demonstration'
        }
      },
      '/dsdupmsbiz': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/dsdupmsbiz': '/dsdupmsbiz'
        }
      },
      '/dsdcustoms': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/dsdcustoms': '/dsdcustoms'
        }
      },
      '/dsdyearbooksData': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/dsdyearbooksData': '/dsdyearbooksData'
        }
      },
      '/dsdindustry': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/dsdindustry': '/dsdindustry'
        }
      },
      '/dsdindustrialpollution': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/dsdindustrialpollution': '/dsdindustrialpollution'
        }
      },
      '/dsdbusiness': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/dsdbusiness': '/dsdbusiness'
        }
      },
      '/dsdcomprehensiveeconomy': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/dsdcomprehensiveeconomy': '/dsdcomprehensiveeconomy'
        }
      },
      '/dsdbusiness': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/dsdbusiness': '/dsdbusiness'
        }
      }
    }
  }
}
