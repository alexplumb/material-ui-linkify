import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import webpackConfigCommon from './webpack.config.common';

const webpackConfig: webpack.Configuration = webpackMerge(webpackConfigCommon, {
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'content-type,authorization,accept',
    },
    port: 8181,
    inline: true,
    historyApiFallback: true,
    clientLogLevel: 'none',
    open: true,
    contentBase: 'dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEV__: true,
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
});

export default webpackConfig;
