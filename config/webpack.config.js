const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "../", "public"),
    port: 5001,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          url: true,
        },
      },

      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: { loader: "url-loader?limit=100000" },
      },

      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: "file-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: "usage", corejs: "2.0.0" }],
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/templates/template.html",
      title: "nowa aplikacja",
    }),
    new CopyPlugin([
      {
        from: "public/img",
        to: "img",
      },
    ]),
  ],
};
