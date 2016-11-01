'use strict';
let path = require('path');

module.exports = {
  context: path.join(process.cwd(), 'src'),

  resolve: {
    modules: [
      'node_modules',
      path.resolve(process.cwd(), 'src')
    ],
    extensions: ['.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        // loader: 'babel',
        loader: 'babel?presets[]=es2015&presets[]=angular2',
        exclude: /(node_modules)/,
        // query: {
        //   presets: ['latest', 'angular2']
        // }
        // query: JSON.stringify({
        //   presets: ['latest', 'angular2']
        // })
        // options: {
        //   presets: ['latest', 'angular2']
        // }
      },
      {
        test: /\.js$/,
        use: 'source-map',
        exclude: [
          path.join(process.cwd(), 'node_modules/rxjs'),
          path.join(process.cwd(), 'node_modules/@angular')
        ]
      },
      {
        test: /\.html$/,
        use: 'html?attrs=false&caseSensitive&removeAttributeQuotes=false'
      }
    ]
  },

  stats: {
    errorDetails: true,
    colors: true,
    modules: true,
    reasons: true
  },

  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
