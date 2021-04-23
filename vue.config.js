const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  devServer: {
    port: 8081
  },
  configureWebpack: {
    plugins: [
      // ホットリロード時に stylelint を実行する
      new StyleLintPlugin({
        files: ["src/**/*.{vue,scss}"]
      })
    ]
  }
};
