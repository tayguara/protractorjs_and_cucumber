let sexlogElements = function() {
    this.inputLogin       = element(by.model('login.login'));
    this.inputPassword    = element(by.model('login.password'));
    this.btnSignIn        = element(by.css('.btn-signin-form'));
    this.titleLiveCam     = element(by.css('.last-livecam   h3[class="text-uppercase"] > strong'));
    this.dropDownAccounts = element(by.css('.profile.dropdown .caret'));
    this.logoutLink       = element(by.css('.dropdown-menu .logout > a'));
};

module.exports = new sexlogElements();