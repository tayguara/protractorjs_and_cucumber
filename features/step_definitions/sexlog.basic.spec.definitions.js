const envTest        = require('../../support/settings');
const chai           = require('chai');
const elements       = require('../../pages/sexlog.page');
const sexlogStep     = require('../../steps/sexlog.steps');
const titleExploreSL = require('../../strings/title');
const users          = require('../../dataDriven/sexlog.users');
const contents       = require('../../dataDriven/contents.to.upload');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
let assert = chai.assert;

module.exports = function() {

    this.Given(/^Eu acesso a página "([^"]*)"$/,
        function(site, callback) {
            site = envTest.setConf.testVars.baseURLSexlog;
            browser.driver.manage().window().maximize();
            browser.get(site)
                .then(callback);
        });

    this.When(/^Inserir o "([^"]*)" e "([^"]*)"$/,
        function(login, pass, callback) {
            sexlogStep.signIn(users.getUserById(login).login, users.getUserById(pass).password);
            callback();
        });

    this.When(/^Efetuo o login$/,
        function(callback) {
            let user = users.getRandomUser;
            sexlogStep.signIn(user.login, user.password);
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

    this.Then(/^Fazer upload de (\d+) foto$/,
        function(total, callback) {
            sexlogStep.getUploadMedia(contents.getRandomContent.absolutePath);
            callback();
        });
};