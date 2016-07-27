"use strict";

module.exports.config = {
    allScriptsTimeout: 11000,

    specs: [ '*.js', '**/*.js' ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8090/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};