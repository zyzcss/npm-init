const modifyVars = require('./theme');
/**
 * webpack 公用的loader
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        // 通过 babel-loader 来编译处理 js 和 jsx 文件
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        use: 'url-loader?name-fonts/[name].[md5:hash:hex:7].[ext]',
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              javascriptEnabled: true,
              ...modifyVars,
            },
          },
        ],
      },
    ],
  },
};
