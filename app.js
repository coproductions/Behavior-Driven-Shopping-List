var addButton = document.getElementById('add_shopping_list_item_button');
addButton.addEventListener("click", add_to_shopping_list);

var ourShoppingList = new ShoppingList();

function add_to_shopping_list(){
  var itemName = document.getElementById('title').textContent;
  var itemDescr = document.getElementById('description').textContent;
  console.log('testing variables',itemName,itemDescr);
  var newItem = new ShoppingListItem(itemName,itemDescr);
  ourShoppingList.addItem(newItem);
  var snippet = ourShoppingList.render();
  document.getElementById('content').appendChild(snippet);


}