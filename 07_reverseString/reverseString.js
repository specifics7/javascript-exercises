const reverseString = function(str) {
    let arrStr = str.split('').reverse().join('');

    return arrStr;
};

console.log(reverseString("Hello There!"));

// Do not edit below this line
module.exports = reverseString;
