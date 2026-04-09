// unit test

import { describe, expect, it } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

describe('validateEmail()', () => {

    it('should validate a correct email address', () => {
        const email = 'example@gmail.com';
        const resultFn = () => validateEmail(email);
        expect(resultFn).not.toThrow();
    });

    it('should throw an error if an invalid email address is given', () => {
        const email = 'example';
        const resultFn = () => validateEmail(email);
        expect(resultFn).toThrow();
    });

    it('should throw an error if an empty string is given', () => {
        const email = '';
        const resultFn = () => validateEmail(email);
        expect(resultFn).toThrow();
    });

    it('should throw an error for a null email address', () => {
        expect(() => validateEmail(null)).toThrow("Invalid email address");
    });

})


describe('validateArrayNotEmpty()', () => {
    it('should validate a non-empty array', () => {
        const array = [2, 5];
        const resultFn = () => validateArrayNotEmpty(array);
        expect(resultFn).not.toThrow();
    })
})
