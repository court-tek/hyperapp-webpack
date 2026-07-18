import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: {
        bundle: "./assets/js/hyper/app.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test:/\.scss$/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Starter-kit 2026",
            filename: "index.html",
            template: 'public/template.html',
        })
    ],
    devServer: {
        port: 8080,
        static: path.join(__dirname, "dist"),
        hot: true,
        compress: true,
    },
  mode: "development"
};