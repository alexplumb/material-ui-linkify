import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import path from 'path';
import webpackConfigCommon from './webpack.config.common';

const webpackConfig: webpack.Configuration = webpackMerge(webpackConfigCommon, {
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'content-type,authorization,accept',
    },
    static: {
      directory: path.resolve(__dirname, 'dist'),
      staticOptions: {},
      // Can be:
      // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
      serveIndex: true,
      // Can be:
      // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
      watch: true,
    },
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
    },
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'tslint-loader',
          options: {
            fix: true,
            formatter: 'verbose',
            emitErrors: true,
          },
        },
      },
    ],
  },
} as any);

export default webpackConfig;
