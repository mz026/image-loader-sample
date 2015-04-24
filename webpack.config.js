module.exports = {
  target: 'node',
  entry: './script.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }
    ]

  }
};
