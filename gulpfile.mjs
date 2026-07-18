 import { src, dest, watch } from "gulp";
 import webpackStream from "webpack-stream";
 import webpack from "webpack";

 import webpackConfig from "./webpack.config.js";


function webpacker(cb) {
    console.log(`Running JS task with webpack config: ${webpackConfig}`);
    return src('src/js/*.js')
        .pipe(webpack(webpackConfig))
        .pipe(dest('public/dist'))
    cb();
}

export default function() {
    watch('assets/js/**/*.js', webpacker);
}