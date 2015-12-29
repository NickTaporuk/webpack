'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack  = require('webpack');

module.exports = {
    // configuration
    entry: "./home",
    output: {
        //path: __dirname + "/dist",
        filename: "build.js",
        library:"home"
    },
    watch:NODE_ENV === 'development',
    watchOptionns: {
        agregateTimeout:100
    },
    devtool:NODE_ENV === 'development' ? "source-map" : null ,
    plugins: [

    ]
};