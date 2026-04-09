import { transformToNumber } from "./transformToNumber";

function validateStringNotEmpty(numberInput) {
    if (typeof numberInput !== 'string' || numberInput.length === 0) {
        throw new Error('Input must be a non-empty string');
    }
}

function validateNumber(number) {
    if (typeof number !== 'number' || Number.isNaN(number)) {
        throw new Error('Transformed value is not a valid number');
    }
}


export function cleanNumbers(inputNumbers) {
    const numbers = [];
    for (const numberInput of inputNumbers) {
        validateStringNotEmpty(numberInput);
        const number = transformToNumber(numberInput);
        validateNumber(number);
        numbers.push(number);
    }
    return numbers;
}
