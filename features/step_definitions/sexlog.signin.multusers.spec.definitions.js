let chai           = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect         = chai.expect;
let assert         = chai.assert;
let elements       = require('../../pages/sexlog.page');
let processUsers   = require('../../util/process.muiltuser');
let sexlogStep     = require('../../steps/sexlog.steps');
let titleExploreSL = require('../../strings/title');

module.exports = function() {

    this.Given(/^Acessar a URL "([^"]*)"$/,
        function(url, callback) {
            browser.driver.manage().window().maximize();
            browser.get(url)
                .then(callback);
        });

    this.When(/^Inserir o "([^"]*)" e "([^"]*)"$/,
        function(login, pass, callback) {
            sexlogStep.signIn(processUsers.getUser(login), pass);
            callback();
        });

    this.Then(/^precisa verificar se o texto do title no Explorar, está ok$/,
        function(callback) {
            elements.titleLiveCam.isDisplayed();
            browser.getTitle().then(function(site) {
                for (let i = 0; i < titleExploreSL.titleExplore; i++) {
                    expect(site).to.equal(titleExploreSL.titleExplore[i]);
                }
            }).then(callback);
        });

    this.Then(/^verificar se o titulo da livecam no Explorar é "([^"]*)"$/,
        function(title, callback) {
            elements.titleLiveCam.isDisplayed();
            elements.titleLiveCam.getText().then(function(text) {
                assert.equal(text, title);
            })
                .then(callback);
        });

    this.Then(/^Sair do Sexlog$/,
        function(callback) {
            sexlogStep.logOut();
            callback();
        });
};