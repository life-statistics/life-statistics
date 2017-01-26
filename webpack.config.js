var path = require('path');
var libraryName = 'library';
var include = path.join(__dirname, 'src')

var config = {
    entry: './src/index',

    output: {
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: libraryName,
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', include },
            { test: /\.json$/, 'loader': 'json', include },
        ]
    }
}

module.exports = config;