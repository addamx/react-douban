module.exports = {
  plugins: {
    'postcss-import': {}, // 编译@import (包括node_module, web_modules的样式文件); 应该首先使用; https://github.com/postcss/postcss-import
    'postcss-simple-vars': {},  //可添加变量
    'postcss-cssnext': {},  //css界的babel
    'autoprefixer': {
      browers: ['last 5 versions']
    },
    'cssnano': {},  //压缩
  }
}
