import {dev, multi, reducerForNumbers, sub, sum} from './lesson_7';

// Full test
test('Sum of 2 numbers', () => {
    const a = 10
    const b = 5

    const result = sum(a, b)

    expect(result).toBe(15)
})

//Shorten tests
test('Devide of 2 numbers', () => {
    expect(dev(10, 2)).toBe(5)
})
test('Mult of 2 numbers', () => {
    expect(multi(5, 5)).toBe(25)
})
test('Sub of 2 numbers', () => {
    expect(sub(5, 5)).toBe(0)
})

// Test for reducer
test('Test for reducer function', () => {
    expect(reducerForNumbers(10, {type: 'sum', curNumber: 10})).toBe(20)
    expect(reducerForNumbers(10, {type: 'multi', curNumber: 10})).toBe(100)
    expect(reducerForNumbers(10, {type: 'dev', curNumber: 10})).toBe(1)
    expect(reducerForNumbers(10, {type: 'sub', curNumber: 10})).toBe(0)
})