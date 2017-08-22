const users = require('../dataDriven/sexlog.users');

let get = function() {
    this.getUser = function(id) {
        for (let i = 0; i < Object.keys(users.multiusers).length; i++) {
            if (id == Object.keys(users.multiusers)[i]) {
                return users.multiusers['login' + i];
            }
        }
    }
};

module.exports = new get();