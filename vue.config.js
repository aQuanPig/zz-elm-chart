module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'service': '@/service',
        'assets': '@/assets',
        'views': '@/views',
        'store': '@/store',
        'utils': '@/utils'
      }
    }
  }
}