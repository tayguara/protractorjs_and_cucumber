const envTest = require('../support/settings');
const util    = require('../util/utilFunctions');

let getContentFile = function() {
    this.returnTotalFiles = function() {
        let totalContents = [];

        for (let i = 1; i < 18; i++) {
            if (i < 10) {
                i = '0' + i;
            }

            totalContents.push({
                nameFile: i,
                pathFile: i + '.jpg',
                absolutePath: envTest.setConf.testVars.contentsPath + i + '.jpg',
            })
        }

        return totalContents;
    };

    this.getRandomContent = util.getRandomVal(this.returnTotalFiles());
};

module.exports = new getContentFile();