function ShoppingListItem(name, description) {
  //this.parentList = null;
  //this.index = null;
  this.name = name;
  this.description = description;
  this.is_done = false;
  this.getIndex = function(){
    console.log(this.parentList)
    var timeStampsArray = this.timeStampsArray;
    for (var i = 0; i < timeStampsArray.length; i++) {
      if(timeStampsArray[i] === this.timeStamp){
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


    var deleteButton = '<button id='+index+' class="deleteButton">x</button>';

    if(this.is_done){
      var checkBoxSnippet = '<input type="checkbox" class="shoppingItem" id='+index+'  checked>';
    } else {
      checkBoxSnippet = '<input type="checkbox" class="shoppingItem" id='+index+'  >';
    }
    console.log('<li class=\"completed_' + this.is_done + '\"><span>' + this.name + '</span> <span>' +': '+ this.description + '</span></li>'+checkBoxSnippet)

    return '<li class=\"completed_' + '     '+this.is_done + '\"><p>'+checkBoxSnippet+'<label>' + this.name + '</label> <span class=\'description\'>' + this.description +'    '+ deleteButton+'</span></p></li>';

  };
}

