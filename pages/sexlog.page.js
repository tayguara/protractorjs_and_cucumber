let sexlogElements = function() {
    this.inputLogin    = element(by.model('login.login'));
    this.inputPassword = element(by.model('login.password'));
    this.btnSignIn     = element(by.css('.btn-signin-form'));
    this.titleLiveCam  = element(by.css('.last-livecam   h3[class="text-uppercase"] > strong'));
};

module.exports = new sexlogElements();