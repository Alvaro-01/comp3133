const assert = require('assert');

const calculator = require('../app/calculator');


describe('Validating calculator Functions', () => {
  it('should add two numbers successfully', () => {
    const result = calculator.add(5, 2);
    console.log(`add(5, 2) expected result 7 ${result === 7 ? 'PASS' : 'FAIL'}`);
    assert.strictEqual(result, 7);
  });

  it('should fail to add two numbers', () => {
    const result = calculator.add(5, 2);
    console.log(`add(5, 2) expected result 8 ${result === 8 ? 'PASS' : 'FAIL'}`);
    assert.strictEqual(result, 8);
  });

  it('should subtract two numbers successfully', () => {
    const result = calculator.sub(5, 2);
    console.log(`sub(5, 2) expected result 3 ${result === 3 ? 'PASS' : 'FAIL'}`);
    assert.strictEqual(result, 3);
  });

  it('should fail to subtract two numbers', () => {
    const result = calculator.sub(5, 2);
    console.log(`sub(5, 2) expected result 5 ${result === 5 ? 'PASS' : 'FAIL'}`);
    assert.strictEqual(result, 5);
  });

  it('should multiply two numbers successfully', () => {
    const result = calculator.mul(5, 2);
    console.log(`mul(5, 2) expected result 10 ${result === 10 ? 'PASS' : 'FAIL'}`);
    assert.strictEqual(result, 10);
  });

  it('should fail to multiply two numbers', () => {
    const result = calculator.mul(5, 2);
    console.log(`mul(5, 2) expected result 12 ${result === 12 ? 'PASS' : 'FAIL'}`);
    assert.strictEqual(result, 12);
  });

  it('should divide two numbers successfully', () => {
    const result = calculator.div(10, 2);
    console.log(`div(10, 2) expected result 5 ${result === 5 ? 'PASS' : 'FAIL'}`);
    assert.strictEqual(result, 5);
  });

  it('should fail to divide two numbers', () => {
    const result = calculator.div(10, 2);
    console.log(`div(10, 2) expected result 2 ${result === 2 ? 'PASS' : 'FAIL'}`);
    assert.strictEqual(result, 2);
  });

 
});