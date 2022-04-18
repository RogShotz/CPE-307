const Port = require("./stock.js");

test('Portfolio Init', () => {
  var target = new Port.Portfolio();
  expect(target).not.toBe(null);
});

test('Portfolio Empty', () => {
  var init = new Port.Portfolio();
  var target = init.shares;
  expect(target).not.toBe(null);
});

test('Portfolio Four', () => {
  var init = new Port.Portfolio();
  init.buyShares("GME", 200);
  init.buyShares("RBLX", 50);
  var target = init.getShares();
  var result = ["GME", 200, "RBLX", 50]
  expect(target).toStrictEqual(result);
});