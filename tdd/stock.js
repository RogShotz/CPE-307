const arr = new Array();

class Portfolio {
    constructor() {  // Constructor
    }

    buyShares(ticker, shares) {
        arr.push(ticker, shares);
    }

    getShares() {
        return arr;
    }

    getNumShares() {
        return arr.length / 2;
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