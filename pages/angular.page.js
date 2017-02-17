let angularElements = function() {
    this.addField   = element(by.css('[placeholder="add new todo here"]'));
    this.checkedBox = element(by.model('todo.done'));
    this.addButton  = element(by.css('[value="add"]'));
};

module.exports = new angularElements();