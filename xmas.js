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

