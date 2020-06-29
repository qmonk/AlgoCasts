// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let isNegative = n < 0;
    let arr = (n + "").split("-");
    let numStr = isNegative ? arr[1] : arr[0];
    let rev = "";
    for (let i = numStr.length - 1; i >= 0; i--) {
        rev += numStr[i];
    }

    let revInt = parseInt(rev);
    return isNegative ? revInt * -1 : revInt;
}

module.exports = reverseInt;
