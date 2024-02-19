// webpack.config.js
module.exports = {
    entry: './ui-library.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
    mode: 'development'
  };
  