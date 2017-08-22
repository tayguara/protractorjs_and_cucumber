let utilFunctions = function () {
    this.getRandomVal = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    };

    this.setScrollPage = function (element) {

        function execScroll() {
            return browser.executeScript('arguments[0].scrollIntoView()',
                element.getWebElement())
        }

        browser.wait(execScroll, 5000);
    };
};

module.exports = new utilFunctions();