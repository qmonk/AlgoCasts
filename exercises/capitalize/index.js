// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arr1 = str.split(" ");
    const arr2 = [];
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index] + "";
        arr2.push(element.charAt(0).toUpperCase() + element.substr(1));
    }
    return arr2.join(" ");
}

module.exports = capitalize;
