fs = require 'fs'

module.exports = (api) ->
  api.configureWebpack ->
    additions =
      resolve:
        extensions: ['.coffee']
      module:
        rules: [
          {
            test: /\.coffee$/
            loader: 'babel-loader!coffee-loader'
          }
        ]

    if fs.existsSync api.resolve('./src/main.coffee')
      additions.entry =
        app: './src/main.coffee'

    additions
