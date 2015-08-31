var webpack = require('webpack');
module.exports = {
  entry: {
    exec_sample: './src/exec_sample.js'
  },
  output: {
    path: __dirname + "/htdocs/js/",
    filename: "[name].js"
  },
  devtool: '#source-map',
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ["node_modules", "bower_components"]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),  // ライブラリ間で依存しているモジュールが重複している場合、二重に読み込まないようにする
    new webpack.optimize.AggressiveMergingPlugin(), //ファイルを細かく分析し、まとめられるところはできるだけまとめてコードを圧縮する
    new webpack.optimize.UglifyJsPlugin() //jsファイルのminify
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};