const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductIndex": "./src/bootstrap.js",
      },
      shared: {
        faker: {
          singleton: true, // load only one copy of faker irrespective of the version
        },
      }, // faker module is uses by both cart and product
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
