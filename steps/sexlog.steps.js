const elements = require('../pages/sexlog.page');
const wait = require('../util/waitElement');
const util = require('../util/utilFunctions');

let sexlogSteps = function () {
    this.signIn = function (login, pass) {
        elements.inputLogin.sendKeys(login);
        elements.inputPassword.sendKeys(pass);
        elements.btnSignIn.click();
    };

    this.logOut = function () {
        elements.dropDownAccounts.click();
        elements.logoutLink.click()
    };

    this.getUploadMedia = function (file) {
        wait.ClickIf(elements.publishBtnUpload);
        elements.publishInputUpload.isPresent();
        elements.publishInputUpload.sendKeys(file);
        elements.publishBtnSalve.isPresent();
        util.setScrollPage(elements.publishBtnSalve);
        elements.publishBtnSalve.click();
        wait.ClickIf(elements.publishSuccessUpload);
        wait.ClickIf(elements.pushNotificationActive);
    };
};

module.exports = new sexlogSteps();