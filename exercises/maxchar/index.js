// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = [];
    const map = {}; //char -> count

    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        if (chars.indexOf(curr) >= 0) {
            map[curr] = map[curr] + 1;
        } else {
            chars.push(curr);
            map[curr] = 1;
        }
    }

    let max = chars[0];
    for (let i = 1; i < chars.length; i++) {
        const curr = chars[i];
        if (map[curr] > map[max]) {
            max = curr;
        }
    }

    return max;
}

module.exports = maxChar;
