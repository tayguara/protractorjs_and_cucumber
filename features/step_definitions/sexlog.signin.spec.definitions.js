let chai           = require('chai');
let chaiAsPromised = require('chai-as-promised');
let titleExploreSL = require('../../strings/title');
let elements       = require('../../pages/sexlog.page');
let users          = require('../../dataDriven/sexlog.users');

chai.use(chaiAsPromised);
let expect = chai.expect;
let assert = chai.assert;

module.exports = function() {

    this.Given(/^Eu acesso a página "([^"]*)"$/,
        function(site, callback) {
            browser.driver.manage().window().maximize();
            browser.get(site)
                .then(callback);
        });

    this.When(/^Insiro meu login e senha$/,
        function(callback) {
            elements.inputLogin.sendKeys(users.userSL.login);
            elements.inputPassword.sendKeys(users.userSL.password)
                .then(callback);
        });

    this.When(/^E clico em login$/,
        function(callback) {
            elements.btnSignIn.click()
                .then(callback);
        });

    this.Then(/^Eu devo verificar se o texto do title no Explorar, está ok$/,
        function(callback) {
            elements.titleLiveCam.isDisplayed();
            browser.getTitle().then(function(site) {
                for (let i = 0; i < titleExploreSL.titleExplore; i++) {
                    expect(site).to.equal(titleExploreSL.titleExplore[i]);
                }
            }).then(callback);
        });

    this.Then(/^E devo verificar se o titulo da livecam no Explorar é "([^"]*)"$/,
        function(title, callback) {
            elements.titleLiveCam.isDisplayed();
            elements.titleLiveCam.getText().then(function(text) {
                assert.equal(text, title);
            }).then(callback);
        });
};