const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.entry = [
    'apps/calendar-microapp/src/index.html',
    'apps/calendar-microapp/src/main.tsx',
  ];
  config.output = {
    publicPath: 'auto',
    path: path.resolve(__dirname, '../../dist/apps/calendar-microapp'),
  };

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'calendar_microapp',
      library: { type: 'var', name: 'calendar_microapp' },
      filename: 'remoteEntry.js',
      exposes: {
        './calendar-wc': 'apps/calendar-microapp/src/bootstrap.tsx',
      },
      shared: ['react', 'react-dom'],
    })
  );
  config.optimization.runtimeChunk = false;
  config.resolve.extensions = ['.tsx', '.ts', '.js'];
  config.module.rules = [
    {
      test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
      use: [{ loader: 'file-loader' }],
    },
    {
      test: /.tsx$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/react', '@babel/env'],
          },
        },
      ],
    },
    {
      test: /\.html/,
      use: [{ loader: 'file-loader?name=[name].[ext]' }],
    },
    {
      test: /\.scss|\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ];

  return config;
});
