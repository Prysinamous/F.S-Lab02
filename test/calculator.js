//test

//ADD
var cal = require("../app/calculator.js");
var assert = require("chai").assert;

describe("add",() =>
{
    function makeTest(i, j)
    {
        let expected = i + j;
        
        it(`${i} plus ${j} is ${expected}`, () => {
            assert.equal(cal.add(i, j), expected);
        });
    }

    makeTest(5,2)
});
  

var cal = require("../app/calculator.js");
var assert = require("chai").assert;

describe("add",() =>
{
    function makeTest(i, j)
    {
        let expected = 8
        
        it(`${i} plus ${j} is ${expected}`, () => {
            assert.equal(cal.add(i, j), expected);
        });
    }

    makeTest(5,2)
});


//MUL

var mul = require("../app/calculator.js");

describe("mul",() =>
{
    function makeTest(i, j)
    {
        let expected = i * j;
        
        it(`${i} x ${j} is ${expected}`, () => {
            assert.equal(cal.mul(i, j), expected);
        });
    }

    makeTest(5,2)
});
  


describe("mul",() =>
{
    function makeTest(i, j)
    {
        let expected = 8
        
        it(`${i} x ${j} is ${expected}`, () => {
            assert.equal(cal.mul(i, j), expected);
        });
    }

    makeTest(5,2)
});


//DIV

var div = require("../app/calculator.js");

describe("div",() =>
{
    function makeTest(i, j)
    {
        let expected = i / j;
        
        it(`${i} / ${j} is ${expected}`, () => {
            assert.equal(cal.div(i, j), expected);
        });
    }

    makeTest(5,2)
});
  


describe("div",() =>
{
    function makeTest(i, j)
    {
        let expected = 8
        
        it(`${i} / ${j} is ${expected}`, () => {
            assert.equal(cal.div(i, j), expected);
        });
    }

    makeTest(5,2)
});


//SUB

describe("sub",() =>
{
    function makeTest(i, j)
    {
        let expected = i - j;
        
        it(`${i} - ${j} is ${expected}`, () => {
            assert.equal(cal.sub(i, j), expected);
        });
    }

    makeTest(5,2)
});
  


describe("sub",() =>
{
    function makeTest(i, j)
    {
        let expected = 8
        
        it(`${i} - ${j} is ${expected}`, () => {
            assert.equal(cal.sub(i, j), expected);
        });
    }

    makeTest(5,2)
});


