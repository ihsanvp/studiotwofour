const path = require("path");
const plugins = require("./webpack.plugins");
const nodeExternals = require("webpack-node-externals");

/** @type {import('@types/webpack').Configuration} */
module.exports = {
  entry: "./src/server.ts",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  externals: [nodeExternals()],
  plugins,
};
