let elements = require('../../pages/angular.page');

module.exports = function() {

    this.Given(/^I get a search site url "([^"]*)"$/,
        function(site, callback) {
            browser.get(site)
                .then(callback);
        });

    this.When(/^I type "([^"]*)"$/,
        function(text, callback) {
            elements.addField.sendKeys(text)
                .then(callback);
        });

    this.Then(/^I wait to result site$/,
        function(callback) {
            elements.addButton.click()
                .then(callback);
        });

    this.Then(/^I check result list to validate the search, should be "([^"]*)"$/,
        function(bool, callback) {
            elements.addField.sendKeys(text)
                .then(callback);
        });

    this.Then(/^I close the browser$/,
        function(callback) {
            browser.close()
                .then(callback);
        });
};
