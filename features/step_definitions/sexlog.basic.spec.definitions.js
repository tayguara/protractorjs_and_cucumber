let chai           = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect         = chai.expect;
let assert         = chai.assert;
let elements       = require('../../pages/sexlog.page');
let processUsers   = require('../../util/process.multiuser.js');
let sexlogStep     = require('../../steps/sexlog.steps');
let titleExploreSL = require('../../strings/title');
let users          = require('../../dataDriven/sexlog.users');

module.exports = function() {

    this.Given(/^Eu acesso a página "([^"]*)"$/,
        function(site, callback) {
            browser.driver.manage().window().maximize();
            browser.get(site)
                .then(callback);
        });

    this.When(/^Inserir o "([^"]*)" e "([^"]*)"$/,
        function(login, pass, callback) {
            sexlogStep.signIn(processUsers.getUser(login), pass);
            callback();
        });

    this.When(/^Efetuo o login$/,
        function(callback) {
            sexlogStep.signIn(users.userSL.login, users.userSL.password);
            callback();
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

    this.Then(/^verificar se o titulo da livecam no Explorar é "([^"]*)"$/,
        function(title, callback) {
            elements.titleLiveCam.isDisplayed();
            elements.titleLiveCam.getText().then(function(text) {
                assert.equal(text, title);
            })
                .then(callback);
        });

    this.Then(/^Deslogar com o usuário$/,
        function(callback) {
            sexlogStep.logOut();
            callback();
        });

    this.Then(/^Fechar o browser$/,
        function(callback) {
            browser.close()
                .then(callback);
        });
};