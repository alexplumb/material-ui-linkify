import webpack from 'webpack';
import path from 'path';

const ROOT_PATH = path.resolve(__dirname);

// Common configuration settings
const config: webpack.Configuration = {
  entry: path.resolve(ROOT_PATH, 'src/index.ts'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(ROOT_PATH, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              'react-hot-loader/babel',
            ],
          },
        },
      },
    ],
  },
};

export default config;
