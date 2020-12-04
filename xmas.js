/* Solutions of the Scrimba Javascript challenge!  */
import * as func from './functions.js';
import pkg from 'chai';
const {assert, expect} = pkg;

const children = 3;
const candy = 10;
const result1 = func.candies(children, candy);
assert.equal(result1,9);
console.log("Day 1 -> OK! Candy is " + result1 );

//-----------------------------

const deposit = 100;
const rate = 20;
const threshold = 170;
const result2 = func.depositProfit(deposit, rate, threshold)
assert.equal(result2,3);
console.log("Day 2 -> OK! Years are " + result2 );

//-----------------------------

const values = ["a", "b", "c", "d"];
const size = 2;
const result3 = func.chunkyMonkey(values, size);
expect(result3).to.be.eql([["a", "b"], ["c", "d"]]);
console.log("Day 3 -> OK! Arrays are: " + JSON.stringify(result3));

//------------------------------

const year = 1905;
const result4 = func.centuryFromYear(year);
assert.equal(result4,20);
console.log("Day 4 -> OK! Century is " + result4 );

//-----------------------------

