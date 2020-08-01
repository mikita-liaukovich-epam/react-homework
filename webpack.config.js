const path = require('path');

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
        }
    };
}
