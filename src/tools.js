const sum = a => b => a + b;
const inc = a => a + 1;
const churchNumToNum = n => n(inc)(0)

exports.sum = sum;
exports.inc = inc;
exports.churchNumToNum = churchNumToNum;
