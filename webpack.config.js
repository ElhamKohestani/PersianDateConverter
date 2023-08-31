const path = require('path');
const CopyWebPackPlugin = require('copy-webpack-plugin');



module.exports = {
    entry : {
        popup : './src/popup.js'

    },
    output : {
        filename: '[name].bundle.js',
        path : path.resolve(__dirname, 'dist')
    },

    mode: 'development',
    watch: true,
    plugins : [
        new CopyWebPackPlugin({
            patterns : [{from : 'static'}]
        })
    ]
}