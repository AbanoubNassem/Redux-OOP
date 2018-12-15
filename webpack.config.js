const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src"),

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "lib")
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },

  plugins: [new ForkTsCheckerWebpackPlugin()]
};
