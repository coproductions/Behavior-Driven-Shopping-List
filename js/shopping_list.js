function ShoppingList() {
  this.items = [];
  this.addItem = function(item) {
    this.items.push(item);
  };
  this.removeItem = function(item) {
    if (arguments.length === 0) {
      if(this.items.length !== 0) {
        this.items.pop();
      } else {
        return false;
      }
    } else {
      if (this.items.indexOf(item) === -1) {
        throw new Error ('Thats not in the Shopping List');
      } else {
        this.items.splice(this.items.indexOf(item),1);
      }
    }
  };
  this.render = function() {
    var string = '';
    for (var i = 0; i < this.items.length; i++) {
      string += (this.items[i].render());
    }
    return string;
  };
}