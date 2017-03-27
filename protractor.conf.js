//protractor.conf.js
exports.config = {
    seleniumAddress: 'http://192.168.10.107:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: true,
        maxInstances: 10
    },

    // Spec patterns are relative to this directory.
    specs: [
        'features/*.feature',
        'features/*/*.feature'
    ],

    baseURL: 'http://localhost:8080/',

    cucumberOpts: {
        require: [
            'features/step_definitions/*definitions.js',
            'support/env.js'
        ],
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    }
};