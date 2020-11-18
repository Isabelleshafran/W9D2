// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.
// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//     Example 2:
// Input: "cbbd"
// Output: "bb"

// reverses a string
function reverse(str){
    return str.split("").reverse().join("");
}

// array of all palindromic substrings longer than 1;
function substrings(string){
    let res = [];

    for(let i = 0; i < string.length; i++){
        for(let j = i; j < string.length; j++){
            let subs = string.slice(i, j+1);

            if(subs.length > 1 && subs === reverse(subs)){
                res.push(subs);
            } 
        }
    }

    let longest = res[0];

    for (let i = 1; i < res.length; i++) {
        if (res[i].length > longest.length) {
            longest = res[i];
        }
    }
    return longest;

}

// console.log(substrings("babad"));
// console.log(substrings("cbbd"));




// Write an efficient algorithm that searches for a value in an m x n matrix.This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
//     Example 1:
// Input:
// matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:
// Input:
// matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ]
// target = 13
// Output: false

// Road Map
// 1. iterate through the m x n matrix
// 2. Grab a one row at a time
// 3. Do Bsearch on it

function findTarget(matrix, target) {

    for (let i = 0; i < matrix.length; i++) {
        if (bsearch(matrix[i], target) !== -1) {
            return true;
        }     
    }
    return false;
}

function bsearch(array, target) {
    if (array.length === 0) {
        return -1;
    }

    const mid = Math.floor(array.length / 2);
    if (array[mid] > target) {
        return bsearch(array.slice(0, mid), target);
    } else if (array[mid] < target) {
        const temp = bsearch(array.slice(mid + 1), target);
        return temp === -1 ? -1 : mid + 1 + temp;
    } else {
        return mid;
    }
}

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];

const target = 13;

console.log(findTarget(matrix, target));