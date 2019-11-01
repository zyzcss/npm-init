const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); // 引用公共的配置

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 用于将组件的css打包成单独的文件输出到`lib`目录中
const modifyVars = require('./theme');
// 清空dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 多入口配置
const glob = require('glob');
const entries = glob.sync('./src/**/?(index.ts|index.tsx)').reduce(function(prev, item) {
  const names = item.split('/');
  key = names.slice(names.length - 2, names.length - 1);
  prev[key] = item;
  return prev;
}, {});

const prodConfig = {
  mode: 'production', // 生产模式
  entry: entries, // 入口文件
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: params => {
      const { chunk } = params;
      const { name } = chunk;
      if (name === 'src') {
        return 'index.js';
      }
      return '[name]/index.js';
    },
    libraryTarget: 'umd', // 采用通用模块定义, 注意webpack到4.0为止依然不提供输出es module的方法，所以输出的结果必须使用npm安装到node_modules里再用，不然会报错
  },
  resolve: {
    //下面后缀的文件导入时可以省略文件名，js必须要有，否则会react.js文件会无法被解析
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
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
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css', // 打包css样式 并提取成该css的文件名
      moduleFilename: ({ name }) => {
        if (name === 'src') {
          return 'index.css';
        }
        return `${name}/index.css`;
      },
    }),
  ],
  optimization: {
    minimize: false,
    // splitChunks: {
    //   cacheGroups: {
    //     common: {
    //       name: "common",
    //       test: /\.less$/,
    //       minSize: 1024,
    //       chunks: "all",
    //       priority: 5
    //     }
    //   }
    // }
  },
  externals: {
    // 定义外部依赖，打包时忽略这些依赖进去
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    antd: {
      root: 'antd',
      commonjs2: 'antd',
      commonjs: 'antd',
      amd: 'antd',
    },
    axios: {
      root: 'axios',
      commonjs2: 'axios',
      commonjs: 'axios',
      amd: 'axios',
    },
    qs: {
      root: 'qs',
      commonjs2: 'qs',
      commonjs: 'qs',
      amd: 'qs',
    },
    url: {
      root: 'url',
      commonjs2: 'url',
      commonjs: 'url',
      amd: 'url',
    },
  },
};

module.exports = merge(baseConfig, prodConfig); // 将baseConfig和prodConfig合并为一个配置
