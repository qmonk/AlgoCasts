// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const detail = (str) => {
    str = (str + "").toLowerCase();
    const chars = [];
    const map = {};
    for (let index = 0; index < str.length; index++) {
        const c = str[index];
        const charCode = c.charCodeAt(0);
        if (charCode >= 97 && charCode <= 122) {
            if (chars.indexOf(c) >= 0) {
                map[c] = map[c] + 1;
            } else {
                map[c] = 1;
                chars.push(c);
            }
        }
    }
    return { chars: chars, map: map };
};

function anagrams(stringA, stringB) {
    const d1 = detail(stringA);
    const d2 = detail(stringB);
    if (d1.chars.length === d2.chars.length) {
        let sameChars = true;
        for (let index = 0; index < d1.chars.length; index++) {
            const c1 = d1.chars[index];
            if (d2.chars.indexOf(c1) < 0) {
                sameChars = false;
                break;
            }
        }
        if (sameChars) {
            let sameQuantity = true;
            for (let index = 0; index < d1.chars.length; index++) {
                const c1 = d1.chars[index];
                const o1 = d1.map[c1];
                if (d2.map[c1] !== o1) {
                    sameQuantity = false;
                    break;
                }
            }
            return sameQuantity;
        }
    }

    return false;
}

module.exports = anagrams;
