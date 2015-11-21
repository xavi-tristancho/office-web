module.exports = {
    context : __dirname + "/modules",
    entry : "./index.js",
    output : {
        path : __dirname + "/modules",
        filename : "bundle.js"
    },
    devtool: 'eval',
    module : {
        loaders : [
            {test : /\.html/, loader : 'raw', exclude: /node_modules/ }
        ]
    }
};