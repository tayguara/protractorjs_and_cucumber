let waitElement = function() {
    let protractWait = protractor.ExpectedConditions;
    this.ClickIf     = function(element) {
        browser.wait(protractWait.presenceOf(element), 5000).then(function() {
            element.isEnabled().then(function(enabled) {
                if (enabled) {
                    element.click();
                }
            })
        })
    };
};

module.exports = new waitElement();