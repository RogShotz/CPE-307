function ShareSaleException(message) {
    const e = new Error(message);
    return e;
}

ShareSaleException.prototype = Object.create(Error.prototype);
exports.ShareSaleException = ShareSaleException;