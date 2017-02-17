let elements = require('../../pages/angular.page');

module.exports = function() {

    this.Given(/^I go to "([^"]*)"$/,
        function(site, callback) {
            browser.get(site)
                .then(callback);
        });

    this.When(/^I add "([^"]*)" in the task field$/,
        function(text, callback) {
            elements.addField.sendKeys(text)
                .then(callback);
        });

    this.When(/^I click the add button$/,
        function(callback) {
            elements.addButton.click()
                .then(callback);
        });

    this.Then(/^I should see my new task in the list$/,
        function(callback) {
            elements.checkedBox.click()
                .then(callback);
        });
};
