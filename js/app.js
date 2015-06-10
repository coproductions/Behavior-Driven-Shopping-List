var addButton = document.getElementById('add_shopping_list_item_button');
addButton.addEventListener("click", add_to_shopping_list);
var purgeButton = document.getElementById('purgeButton');
purgeButton.addEventListener("click", purge);

var checkbox = document.getElementsByClassName('shoppingItem');
//console.log(typeof checkbox)

var deleteButton = document.getElementsByClassName('deleteButton');
var editButton = document.getElementsByClassName('edit');
var saveButton = document.getElementsByClassName('save');



var ourShoppingList = new ShoppingList();


function purge(){
  ourShoppingList.items.forEach(function(val){
    if(val.is_done){
      ourShoppingList.removeItem(val)
    }
     var snippetString = ourShoppingList.render();
  //console.log(snippetString);
  // newDiv = document.createElement('div');
  // newDiv.innerHTML = snippetString;
  document.getElementById('content').innerHTML = snippetString;
  document.getElementById('title').value ='';
  document.getElementById('description').value = '';
  Array.prototype.forEach.call(checkbox,function(val){
    val.addEventListener("change",changeCheckedStatus);
  })
  Array.prototype.forEach.call(deleteButton,function(val){
    val.addEventListener("click",removeItemButtonClicked);
  })
  Array.prototype.forEach.call(editButton,function(val){
    val.addEventListener("click",editButtonClicked);
  })

  })
}

function add_to_shopping_list(){
  var itemName = document.getElementById('title').value;
  var itemDescr = document.getElementById('description').value;
  //console.log('testing variables',itemName,itemDescr);
  var newItem = new ShoppingListItem(itemName,itemDescr);
  ourShoppingList.addItem(newItem);
  var snippetString = ourShoppingList.render();
  //console.log(snippetString);
  // newDiv = document.createElement('div');
  // newDiv.innerHTML = snippetString;
  document.getElementById('content').innerHTML = snippetString;
  document.getElementById('title').value ='';
  document.getElementById('description').value = '';
  Array.prototype.forEach.call(checkbox,function(val){
    val.addEventListener("change",changeCheckedStatus);
  })
  Array.prototype.forEach.call(deleteButton,function(val){
    val.addEventListener("click",removeItemButtonClicked);
  })
  Array.prototype.forEach.call(editButton,function(val){
    val.addEventListener("click",editButtonClicked);
  })

    // checkbox[0].addEventListener('click',changeCheckedStatus);

}


function changeCheckedStatus(){
  var index = this.id;
  console.log('this id',this.type)
  var thisItem = ourShoppingList.items[index];
  if(thisItem.is_done){
    thisItem.uncheck();
  } else {thisItem.check();};

  console.log(thisItem.is_done)
}

function removeItemButtonClicked(){
  var index = this.id;
  var thisItem = ourShoppingList.items[index];
  ourShoppingList.removeItem(thisItem);
  var snippetString = ourShoppingList.render();
  document.getElementById('content').innerHTML = snippetString;
  Array.prototype.forEach.call(checkbox,function(val){
    val.addEventListener("change",changeCheckedStatus);
  })
  Array.prototype.forEach.call(deleteButton,function(val){
    val.addEventListener("click",removeItemButtonClicked);
  })
  Array.prototype.forEach.call(editButton,function(val){
    val.addEventListener("click",editButtonClicked);
  })

}

function editButtonClicked(){
  var index = this.id;
  var thisItem = ourShoppingList.items[index];
  thisItem.editable = true;
  var snippetString = ourShoppingList.render();
  document.getElementById('content').innerHTML = snippetString;
  Array.prototype.forEach.call(saveButton,function(val){
    val.addEventListener("click",saveButtonClicked);
  })

}

function saveButtonClicked(){
   var index = this.id;
   var thisItem = ourShoppingList.items[index];
    var thisItem = ourShoppingList.items[index];
    var newName = document.getElementById('editedName').innerHTML;
    var newDescription = document.getElementById('editedDescription').innerHTML;
    thisItem.editable = false;
    thisItem.name = newName;
    thisItem.description = newDescription;
    var snippetString = ourShoppingList.render();
  document.getElementById('content').innerHTML = snippetString;
  Array.prototype.forEach.call(checkbox,function(val){
    val.addEventListener("change",changeCheckedStatus);
  })
  Array.prototype.forEach.call(deleteButton,function(val){
    val.addEventListener("click",removeItemButtonClicked);
  })
  Array.prototype.forEach.call(editButton,function(val){
    val.addEventListener("click",editButtonClicked);
  })

};