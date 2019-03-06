import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import path from 'path';
import common from './webpack.config.common';

const ROOT_PATH = path.resolve(__dirname);

const config: webpack.Configuration = webpackMerge(common, {
  mode: 'production',
  entry: {
    'material-ui-linkify': path.resolve(ROOT_PATH, 'src/index.js'),
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'index.js',
    library: 'MaterialUiLinkify',
    libraryTarget: 'umd',
  },
  externals: [
    {
      lodash: 'lodash',
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    "@material-ui/core",
    /@material-ui\/core\/*./,
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __DEV__: false,
    }),
  ],
});

export default config;
