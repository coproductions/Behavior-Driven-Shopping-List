function ShoppingList() {
  this.items = [];
  this.addItem = function(item) {
    var timeStamp = Date.now();
    this.items.push(item);
    var thisItemsId = this.items.length - 1;
    item.index = thisItemsId;
    item.timeStamp = timeStamp;
    item.parentList = this.items;
    item.timeStampsArray = this.timeStampsArray;
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
        var idOfItemToDelete = this.items.indexOf(item);
        this.items.splice(idOfItemToDelete,1);
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