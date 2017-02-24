let elements = require('../pages/sexlog.page');

let sexlogSteps = function() {

    this.signIn = function(login, pass) {
        elements.inputLogin.sendKeys(login);
        elements.inputPassword.sendKeys(pass);
        elements.btnSignIn.click();
    };

    this.logOut = function() {
        elements.dropDownAccounts.click();
        elements.logoutLink.click()
    }
};

module.exports = new sexlogSteps();