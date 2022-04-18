const Port = require("./stock.js");
const shareSale = require("./ShareSaleException.js");

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

test('Portfolio Sell', () => {
  var init = new Port.Portfolio();
  var target = ["GME", 150, "RBLX", 50]
  init.sellShares("GME", 50);

  var result = init.getShares();
  expect(target).toStrictEqual(result);
});

test('Portfolio AMT', () => {
  var init = new Port.Portfolio();
  var target = ["RBLX", 50]

  var result = init.getShareAmt("RBLX");
  expect(target).toStrictEqual(result);
});

test('Portfolio EqualSell', () => {
  var init = new Port.Portfolio();
  var target = ["GME", 150]
  init.sellShares("RBLX", 50);

  var result = init.getShares();
  expect(target).toStrictEqual(result);
});

test('Portfolio OverSell', () => {
  var init = new Port.Portfolio();
  const target =
    new shareSale.ShareSaleException('Oversell');

  expect(() => { init.sellShares("RBLX", 200) }).toThrow(target);
});
