let envSet = function() {
    this.testVars = {
        baseURLSexlog: 'https://sexlog.com',
        pathToScreenShot: '/storage/screenshots/',
        contentsPath: 'Y:\\contents/',
    };
};

module.exports = new envSet;