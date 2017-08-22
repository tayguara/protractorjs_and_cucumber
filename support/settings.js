let envSet = function() {
    let confTest = require('../protractor.conf');

    if (confTest.config.environmentTest === 'devel') {
        this.setConf = require('../support/envDev');
    }

    if (confTest.config.environmentTest === 'production') {
        this.setConf = require('../support/envProduction');
    }
};

module.exports = new envSet;