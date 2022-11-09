import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve , join } from 'path';

//this is a workaround since __dirname is not supported yet by webpack while using ESM
import * as url from 'url'
const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const config = {

    entry:'./index.js',
    mode: 'development',
    output: {
    path: resolve(dirname, './dist'),
    filename: 'index_bundle.js'
    },
    target: 'web',
    devServer: {
    port: '5000',
    static: {
        directory: join(dirname, 'public')
    },
    open: true,
    hot: true,
    liveReload: true,
    },
    resolve: {
    extensions: ['.js', '.jsx', '.json'],
    },
    module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
    ],
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: join(dirname, 'public', 'index.html')
    })
],
}

export default config;