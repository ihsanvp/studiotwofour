const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = [
  new FilterWarningsPlugin({
    exclude: [/the request of a dependency is an expression/],
  }),
  new NodemonPlugin(),
];
