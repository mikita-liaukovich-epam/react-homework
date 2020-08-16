const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env = {}) => {
    const mode = env.production ? "production" : "development"  //env variable

    return {
        mode,
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {                                            //dev server
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        },
        optimization: {
            minimize: env.production                            //optimization for PROD build
        },
        module: {
            rules: [
                {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: [
                    "babel-loader"
                  ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i, 
                    loader: "file-loader?name=/assets/[name].[ext]"
                },
            ]
        },
        plugins: [
            new CopyPlugin({
              patterns: [
                { from: './src/assets/', to: 'assets/' },
                { from: './src/index.html', to: '' }
              ],
            }),
          ],
    };
}
