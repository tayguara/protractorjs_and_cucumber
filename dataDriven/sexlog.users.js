const getEnvironment = require('../util/translateEnvironment');
const util           = require('../util/utilFunctions');

let userSexlog = function() {
    let users = {
        "local": [
            {
                id: "1",
                name: "sluser_140301_083842",
                login: "sluser_140301_083842",
                email: "slmailuser_140301_083842@selenium.local",
                password: "123456",
                accountid: "2703602",
                subscriber: false,
                superusers: false,
            },
            {
                id: "2",
                name: "tonny",
                login: "tonnyvarudo",
                email: "tonnyvarudo@email.local",
                password: "123456",
                accountid: "2702345",
                subscriber: true,
                superusers: true,
            },
            {
                id: "3",
                name: "noivinha02",
                login: "noivinha02",
                email: "noivinha02@email.com",
                password: "123456",
                accountid: "2702349",
                subscriber: true,
                superusers: true,
            },
            {
                id: "4",
                name: "clube53",
                login: "clube53",
                email: "clube53@email.com",
                password: "123456",
                accountid: "347394",
                subscriber: false,
                superusers: false,
            },
            {
                id: "5",
                name: "aloba09",
                login: "aloba09",
                email: "aloba09@email.com",
                password: "123456",
                accountid: "2702347",
                subscriber: true,
                superusers: false,
            },
            {
                id: "6",
                name: "ninfetacombenga",
                login: "ninfetacombenga",
                email: "ninfetacombenga@teste.local",
                password: "123456",
                accountid: "2702346",
                subscriber: true,
                superusers: true,
            },
            {
                id: "7",
                name: "mulherpramacho",
                login: "mulherpramacho",
                email: "mulherpramacho@teste.com",
                password: "123456",
                accountid: "2702350",
                subscriber: false,
                superusers: false,
            },
            {
                id: "8",
                name: "usuarioseleniumtesteautomatico",
                login: "usuarioseleniumtesteautomatico",
                email: "usuarioseleniumtesteautomatico@email.com",
                password: "123456",
                accountid: "2703938",
                subscriber: false,
                superusers: false,
            },
            {
                id: "9",
                name: "noivinha05",
                login: "noivinha05",
                email: "noivinha05@email.com",
                password: "123456",
                accountid: "2702353",
                subscriber: false,
                superusers: false,
            },
            {
                id: "10",
                name: "paranegrosemulatos",
                login: "paranegrosemulatos",
                email: "paranegrosemulatos@email.com",
                password: "123456",
                accountid: "1204345",
                subscriber: true,
                superusers: false,
            },
            {
                id: "11",
                name: "equipesexlog",
                login: "equipesexlog",
                email: "equipesexlog@esapiens.local",
                password: "123456",
                accountid: "2714035",
                subscriber: true,
                superusers: true,
            },],
        "production": [
            {
                id: "1",
                name: "noivinha02",
                login: "noivinha02",
                email: "noivinha02@esapiens.com",
                password: "123456Abc",
                accountid: "2730587",
                subscriber: true,
                superusers: true,
            },
            {
                id: "2",
                name: "eufogosa",
                login: "eufogosa",
                email: "eufogosa@email.com",
                password: "123456Abc",
                accountid: "3976933",
                subscriber: true,
                superusers: false,
            },
            {
                id: "3",
                name: "noivinha03",
                login: "noivinha03",
                email: "noivinha03@email.com",
                password: "123456",
                accountid: "2731395",
                subscriber: false,
                superusers: true,
            },
            {
                id: "4",
                name: "noivinha04",
                login: "noivinha04",
                email: "noivinha04@email.com ",
                password: "123456",
                accountid: "2732557",
                subscriber: false,
                superusers: false,
            },
            {
                id: "5",
                name: "pegatodas_sp",
                login: "pegatodas_sp",
                email: "pegatodas_sp@hotmail.com ",
                password: "123456Abc",
                accountid: "3649093",
                subscriber: true,
                superusers: false,
            },
            {
                id: "6",
                name: "pegatodas_sp2",
                login: "pegatodas_sp2",
                email: "falhadeseguranca2@gmail.com",
                password: "123456",
                accountid: "3685459",
                subscriber: false,
                superusers: false,
            },
        ],
    };

    this.listUsers = function() {
        if (getEnvironment.environment === "local") {
            return users.local;
        }

        if (getEnvironment.environment === "production") {
            return users.production;
        }
    };

    this.getRandomUser = util.getRandomVal(this.listUsers());

    this.getRandomUserSubscribe = function() {
        let userSubscribe        = {};
        userSubscribe.subscriber = false;

        while (userSubscribe.subscriber === false) {
            userSubscribe = this.getRandomUser;
        }

        return userSubscribe;
    };

    this.getRandomUserNotSubscribe = function() {
        let userNotSubscribe        = {};
        userNotSubscribe.subscriber = true;

        while (userNotSubscribe.subscriber) {
            userNotSubscribe = this.getRandomUser;
        }

        return userNotSubscribe;
    };

    this.getUserById = function(id) {
        let userId;

        for (user of this.listUsers()) {
            if (user.id === id) {
                userId = user;
            }
        }

        return userId;
    };

    this.userSL     = {
        login: "melissa911",
        password: "123asd"
    };
    this.multiusers = {
        login1: "melissa911",
        login2: "just_raven",
        login3: "kati_bug",
    }
};

module.exports = new userSexlog();