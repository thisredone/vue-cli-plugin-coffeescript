// Generated by CoffeeScript 2.3.2
var fs;

fs = require('fs');

module.exports = function(api) {
  return api.configureWebpack(function() {
    var additions;
    additions = {
      resolve: {
        extensions: ['.coffee']
      },
      module: {
        rules: [
          {
            test: /\.coffee$/,
            loader: 'coffee-loader'
          }
        ]
      }
    };
    if (fs.existsSync(api.resolve('./src/main.coffee'))) {
      additions.entry = {
        app: './src/main.coffee'
      };
    }
    return additions;
  });
};