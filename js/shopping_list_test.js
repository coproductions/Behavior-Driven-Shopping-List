
var should = chai.should();
var expect = chai.expect;




describe('ShoppingListItem', function () {
  // beforeEach(function () {
  //   var myItem = new ShoppingListItem('milk','organic goats milk fos the Baby');
  // });
var myItem;
  describe('Constructor', function () {
    beforeEach(function () {
    myItem = new ShoppingListItem('milk','organic goats milk fos the Baby');
  });

    it('should have a property called name and a description', function () {

      myItem.name.should.equal('milk');
      myItem.description.should.equal('organic goats milk fos the Baby');
    });
    it('should be a Class', function () {
      myItem.should.be.an.instanceof(ShoppingListItem);
    });
    it('should hav all relevant properties', function () {
      myItem.should.have.property("name");
      myItem.should.have.property("description");
      myItem.should.have.property("is_done");
      myItem.should.have.property("check");
      myItem.should.have.property("uncheck");
      myItem.should.have.property("render");
    });
  });
  describe('methods', function () {
    it('methods should be functions', function () {
      myItem.check.should.be.a('function');
      myItem.uncheck.should.be.a('function');
      myItem.render.should.be.a('function');
    });
    it('check should set is_done to true', function () {
      myItem.check();
      myItem.is_done.should.equal(true);
    });
    it('uncheck should set is_done to false', function () {
      myItem.check();
      myItem.uncheck();
      myItem.is_done.should.be(false);
    });
    it('render should return an html content', function () {
      myItem.render().should.be.equal("<li class=\"completed_false\"><span>[name]</span> <span>[description]</span></li>. example: <li class=\"completed_false\"><span>milk</span> <span>organic goats milk fos the Baby</span></li>");
    });
  });
});



describe('ShoppingList', function () {
  beforeEach(function () {
    var myList = new ShoppingList();
  });
  describe('Constructor', function () {
    it('should be a class', function () {
      myList.should.be.an.instanceof(ShoppingList);
    });
    it('should have all relevant properties', function () {
      myList.should.have.property("items");
      myList.should.have.property("addItem");
      myList.should.have.property("removeItem");
    });
    it('items should be an array', function () {
      myList.items.should.be.an('array');
    });

  });
  describe('methods', function () {
    beforeEach(function () {
      myList.items = [];
    });
    it('addItem should add item to items array', function () {
      myList.addItem(myItem);
      myList.items[0].should.deepEqual(myItem);
    });
    it('removeItem should remove item from items array', function () {
      myList.addItem(myItem);
      myList.removeItem(myItem);
      myList.items.should.deepEqual([]);
    });
  });

});


