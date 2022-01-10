// Write your solution below:
const tshirtSorter = string => string.match(/s/g).join('') + string.match(/m/g).join('') + string.match(/l/g).join('')

console.log(tshirtSorter('lms'))
console.log(tshirtSorter('smllms'))
console.log(tshirtSorter('slsmmsllsmsmlmsls'))