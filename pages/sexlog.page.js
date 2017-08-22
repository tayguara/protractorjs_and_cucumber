let sexlogElements = function() {
    this.inputLogin                = element(by.model('login.login'));
    this.inputPassword             = element(by.model('login.password'));
    this.btnSignIn                 = element(by.css('.btn-signin-form'));
    this.titleLiveCam              = element(by.css('.last-livecam   h3[class="text-uppercase"] > strong'));
    this.dropDownAccounts          = element(by.css('.profile.dropdown .caret'));
    this.logoutLink                = element(by.css('.dropdown-menu .logout > a'));
    this.publishInputUpload        = element(by.css('.modal-dialog .modal-body .share-file'));
    this.publishBtnUpload          = element(by.css('.share .sl-btn.sl-btn-default'));
    this.publishTextArea           = element(by.model('post.text'));
    this.pushNotificationActive    = element(by.css('.sl-btn.btn-lg.btn-primary'));
    this.pushNotificationNotActive = element(by.css('.sl-btn.btn-lg.btn-default'));
    this.publishBtnSalve           = element(by.css('.sl-modal.sl-share .modal-footer .sl-btn.btn-primary'));
    this.publishSuccessUpload      = element(by.css('.sl-share-success .modal-body > span'));
};

module.exports = new sexlogElements();