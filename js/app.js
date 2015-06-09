var addButton = document.getElementById('add_shopping_list_item_button');
addButton.addEventListener("click", add_to_shopping_list);

var checkbox = document.getElementsByClassName('shoppingItem');
//console.log(typeof checkbox)

var deleteButton = document.getElementsByClassName('deleteButton');




var ourShoppingList = new ShoppingList();

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


}


function changeCheckedStatus(){
  console.log(this);
  var index = this.id;
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

}