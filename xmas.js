/* Solutions of the Scrimba Javascript challenge!  */
import * as func from './functions.js';
import pkg from 'chai';
const {assert, expect} = pkg;

//-------------Day 1---------------

const children = 3;
const candy = 10;
const result1 = func.candies(children, candy);
assert.equal(result1,9);
console.log("Day 1 -> OK! Candy is " + result1 );

//-------------Day 2---------------

const deposit = 100;
const rate = 20;
const threshold = 170;
const result2 = func.depositProfit(deposit, rate, threshold)
assert.equal(result2,3);
console.log("Day 2 -> OK! Years are " + result2 );

//-------------Day 3---------------

const values = ["a", "b", "c", "d"];
const size = 2;
const result3 = func.chunkyMonkey(values, size);
expect(result3).to.be.eql([["a", "b"], ["c", "d"]]);
console.log("Day 3 -> OK! Arrays are: " + JSON.stringify(result3));

//-------------Day 4---------------

const year = 1905;
const result4 = func.centuryFromYear(year);
assert.equal(result4,20);
console.log("Day 4 -> OK! Century is " + result4 );

//-------------Day 5---------------

const str = "Howdy friends!";
const result5 = func.reverseAString(str);
assert.equal(result5,"!sdneirf ydwoH");
console.log("Day 5 -> OK! Rev str is " + result5 );

//-------------Day 6---------------

const strs = ["abc", "", "aaa", "a", "zz"];
const result6 = func.sortByLength(strs);
expect(result6).to.be.eql(["", "a", "zz", "abc", "aaa"]);
console.log("Day 6 -> OK! Sorted array is " + JSON.stringify(result6));

//-------------Day 7---------------

const value = "abcde";
const result7 = func.countVowelConsonant(value);
assert.equal(result7,8);
console.log("Day 7 -> OK! Score is " + result7);

// Day 8 was skipped, was an CSS quiz aaand no, thanks :D
console.log("Day 8 -> Not OK! CSS related, I'm good kkthxbb");

//-------------Day 9---------------

const num = 1000;
const result9 = func.sumOddFibonacciNumbers(num);
assert.equal(result9,1785);
console.log("Day 9 -> OK! Sum is " + result9);

//-------------Day 10---------------

const nums = [3, 6, -2, -5, 7, 3];
const result10 = func.adjacentElementsProduct(nums);
assert.equal(result10,21);
console.log("Day 10 -> OK! Max product is " + result10);

//-------------Day 11---------------
var numbs = [5, 3, 6, 7, 9];
let result11 = func.avoidObstacles(numbs);
assert.equal(result11,4);
console.log("Day 11 -> OK! Number is " + result11);

//-------------Day 12---------------
let timeStr = "19:36";
let result12 = func.validTime(timeStr);
assert.equal(result12, true);
console.log("Day 12 -> OK! Time is formatted correctly: " + result12);


//-------------Day 13---------------
var numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 3;
let result13 = func.extractEachKth(numbs, index);
expect(result13).to.be.eql([1, 2, 4, 5, 7, 8, 10]);
console.log("Day 13 -> OK! Filtered array is " + JSON.stringify(result13));

//-------------Day 14---------------
numbs = [2, 9, 1, 0];
let result14=func.arrayMaximalAdjacentDifference(numbs);
assert.equal(result14,8);
console.log("Day 14 -> OK! Max distance is " + result14);

// Day 15 was skipped, was an CSS quiz aaand no, thanks :D
console.log("Day 15 -> Not OK! CSS related, I'm good kkthxbb");

//-------------Day 16---------------
let val = "aba caba";
let result16 = func.insertDashes(val);
assert.equal(result16,"a-b-a c-a-b-a");
console.log("Day 16 -> OK! Modified str is " + result16);

//-------------Day 17---------------
let st = "cbacb";
let result17 = func.differentSymbolsNaive(st);
assert.equal(result17,3);
console.log("Day 17 -> OK! # of unique characters are " + result17);

//-------------Day 18---------------
let st18 = "abcdefghijk";
let result18 = func.alphabetSubsequence(st18);
assert.equal(result18, true);
console.log("Day 18 -> OK! Is the string in alphabetical order? -> " + result18);