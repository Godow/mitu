//在项目的根目录下（和package.json文件同级）新建一个文件vue.config.js的文件，将此段代码复制进去。
module.exports = {
    baseUrl: './', //在 baseUrl前面加个点baseUrl: './'
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, 
    chainWebpack: () => {},
    configureWebpack: () => {},
    devServer: {
      open: process.platform === 'darwin',
      host: 'localhost',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: null,
      before: app => {}
    }
  }