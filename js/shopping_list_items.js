function ShoppingListItem(name, description) {
  this.name = name || '.  .';
  this.description = description || '.  .';
  this.is_done = false;
  this.editable = false;
  this.getEditSave = function(){
    if(this.editable){
      return 'save';
    } else return 'edit';
  };
  this.getEditElement = function(){
    if(this.editable){
      return 'contenteditable="true"'
    } else return 'contenteditable="false"'
  };
  this.nameId = function(){
    if(this.editable){
      return 'id="editedName"';
    } else return '';
  };
  this.descriptionId = function(){
    if(this.editable){
      return 'id="editedDescription"';
    } else return '';
  };
  this.getIndex = function(){
    var parentArray = this.parentList;
    for (var i = 0; i < parentArray.length; i++) {
      if(parentArray[i].timeStamp === this.timeStamp){
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

    console.log('edit button',editButton)

    var editButton = '<button id='+index+' class="'+this.getEditSave()+'">'+this.getEditSave()+'</button>';
    console.log('edit button',editButton)

    var deleteButton = '<button id='+index+' class="deleteButton">delete</button>';

    if(this.is_done){
      var checkBoxSnippet = '<input type="checkbox" class="shoppingItem" id='+index+'  checked>';
    } else {
      checkBoxSnippet = '<input type="checkbox" class="shoppingItem" id='+index+'  >';
    }
    console.log('<li class=\"completed_' + this.is_done + '\"><span>' + this.name + '</span> <span>' +': '+ this.description + '</span></li>'+checkBoxSnippet)

    return '<li class=\"completed_' + '     '+this.is_done + '\"><p>'+checkBoxSnippet+'<label '+this.nameId()+this.getEditElement()+'>' + this.name + '</label> <span class=\'description\''+this.descriptionId()+this.getEditElement()+'    >' + this.description+'    </span>'+ deleteButton+editButton+'</p></li>';

  };
}

