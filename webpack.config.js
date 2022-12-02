const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.js",
    },
    devServer: {
        hot:true,
        host: 'localhost',
        port: 3000,
        open: true,
        client: {
          overlay: false,
        },
        compress: true,
    },
    module: {
        rules: [
            {
              test: /\.(ts|js)x?$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
              },
            },
            {
              test: /\.s[ac]ss$/i,
              use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" })
    ],
}