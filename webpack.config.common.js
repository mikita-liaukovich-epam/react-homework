const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/serverRenderer.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: 'this'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/assets/[name].[ext]",
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/", to: "assets/" }
      ],
    }),
  ],
};
