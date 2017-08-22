let envSet = function() {
    this.testVars = {
        baseURLSexlog: 'http://sexlog.tay',
        pathToScreenShot: process.env.HOME + '/screenshot',
        contentsPath: 'Y:\\contents\\',
    };
};

module.exports = new envSet;