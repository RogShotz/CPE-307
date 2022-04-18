const shareSale = require("./ShareSaleException.js");

const arr = new Array();

class Portfolio {
    constructor() {  // Constructor
    }

    buyShares(ticker, shares) {
        arr.push(ticker, shares);
    }

    sellShares(ticker, shares) {
        let index = arr.findIndex((element) => element === ticker);

        if (arr[index + 1] > shares){
            arr[index + 1] = arr[index + 1] - shares;
        } else if (arr[index + 1] == shares) {
            arr.splice(index,index);
        } else {
             throw new shareSale.ShareSaleException('Oversell')
        }
    }

    getShares() {
        return arr;
    }

    getNumShares() {
        return arr.length / 2;
    }

    getShareAmt(ticker) {
        let index = arr.findIndex((element) => element === ticker);

        return Array(arr[index], arr[index + 1])

    }
}

exports.Portfolio = Portfolio;

/*function tickShares() {
    var pairs = [];


    return pairs;



    const chrs = "abcdefghijklmnopqrstuvwxyz";
    var pairs = [];

    for (let i = 0; i < 1; i++) {
        let result = '';
        for ( let j = 0; j < 4; j++ ) {
            result += chrs.charAt(Math.floor(Math.random() * chrs.length));
        }
        console.log(result);   
        randomInt = Math.floor(Math.random() * 100000);
        pairs.push(result, randomInt);
    }

    return pairs;
}*/