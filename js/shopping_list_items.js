function ShoppingListItem(name, description) {
  //this.parentList = null;
  //this.index = null;
  this.name = name;
  this.description = description;
  this.is_done = false;
  this.getIndex = function(){
    console.log(this.parentList)
    var parentArray = this.parentList;
    for (var i = 0; i < parentArray.length; i++) {
      if(parentArray[i].name === this.name){
        console.log('theinumbner',i)
        return i;
      }
    };
  }

  this.check = function() {
    this.is_done = true;
  };
  this.uncheck = function() {
    this.is_done = false;
  };
  this.render = function() {

    var index = this.getIndex();
    console.log('renderindex',index)

    var deleteButton = '<button id='+index+' class="deleteButton">x</button>';

    if(this.is_done){
      var checkBoxSnippet = '<input type="checkbox" class="shoppingItem" id='+index+'  checked><br>';
    } else {
      checkBoxSnippet = '<input type="checkbox" class="shoppingItem" id='+index+'  ><br>';
    }
    console.log('<li class=\"completed_' + this.is_done + '\"><span>' + this.name + '</span> <span>' + this.description + '</span></li>'+checkBoxSnippet)

    return checkBoxSnippet+'<li class=\"completed_' + this.is_done + '\"><span>' + this.name + '</span> <span>' + this.description + '</span></li>'+deleteButton;

  };
}

