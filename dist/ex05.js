"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    const splitWord = word.toLowerCase().trim().split('');
    let result = 0;
    splitWord.forEach((value) => {
        if (value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u') {
            result += 1;
        }
    });
    return result;
}
// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
