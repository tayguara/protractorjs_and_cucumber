const confTest = require('../protractor.conf');

let getEnvironment = function() {
    let localNames      = (["devel"]);
    let productionNames = (["production"]);

    if (localNames.indexOf(confTest.config.environmentTest) != -1) {
        return this.environment = 'local';
    }

    if (productionNames.indexOf(confTest.config.environmentTest) != -1) {
        return this.environment = 'production';
    }
};

module.exports = new getEnvironment();