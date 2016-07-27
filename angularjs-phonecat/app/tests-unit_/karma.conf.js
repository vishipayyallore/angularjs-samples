
module.exports = function(config){
    config.set({
        basePath: "../",
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            '**/*.module.js',
            '*!(.module|.spec).js',
            '!(bower_components)/**/*!(.module|.spec).js',
            '**/*.spec.js',
            './tests-unit/*.spec.js',
            './tests-unit/**/*.spec.js'
        ],
        autoWatch: true,
        frameworks: ["jasmine"],
        browsers: ["Chrome"],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ]
    });
};

