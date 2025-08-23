const repeatString = function(str, totalCount) {

    let repeatedString = '';
    // Return 'ERROR' if totalCount is negative 
    if (totalCount < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < totalCount; i++) {
        repeatedString = repeatedString + str;
    }

    return repeatedString;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
