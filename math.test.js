// unit test

import {it, expect} from "vitest";
import { add } from "./math";

it('should return the correct sum if an array of number is provided.', () => {
    // Arrange
    const numbers = [1, 2, 3];

    const expectedResult = numbers.reduce((acc, curr) => acc + curr);
    // Actions
    const result = add(numbers);
    // Assertions
    expect(result).toBe(expectedResult);
})

it('should provide NaN if at least one invalid number is provided.', () => {
    // Arrange
    const numbers = [1, 'NaN', 3];

    const expectedResult = numbers.reduce((acc, curr) => acc + curr);
    // Actions
    const result = add(numbers);
    // Assertions
    expect(result).toBeNaN();
})

it('should provide correct sum if an array of numeric string is provided.', () => {
    // Arrange
    const numbers = ['1', '2', '3'];

    const expectedResult = numbers.reduce((acc, curr) => +acc + +curr);
    // Actions
    const result = add(numbers);
    // Assertions
    expect(result).toBe(expectedResult);
})

// it('should throw an error if no argument is passed.', () => {
//     try {
//         const result = add()
//     } catch (error) {
//         expect(error).toBeDefined()
//     }
// })


it('should throw an error if multiple argument is provided.', () => {
    const resultFn = () => {
        add(1,2,3);
    }
    expect(resultFn).toThrow();
})


it('should throw an error if no argument is passed', () => {
    const resultFn = () => {
        add();
    }
    
    expect(resultFn).toThrow();
})
