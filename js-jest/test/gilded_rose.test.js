const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});

describe("Gilded Rose", function() {
  it("Conjured items degrade twice as fast", function() {
    const shop = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(4);  
  });

  it("Backstage passes increase in quality", function() {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(13);  
  });

});