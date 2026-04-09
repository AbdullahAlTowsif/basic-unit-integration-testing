// unit test

import { expect, it } from "vitest";
import { stringLength } from "./stringLength";

it('should return correct length for non-empty string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('sosuke aizen')).toBe(12);
});

it('should return 0 for empty string', () => {
    expect(stringLength('')).toBe(0);
});

it('should throw error for non-string input', () => {
    expect(() => stringLength(null)).toThrow();
    expect(() => stringLength(undefined)).toThrow();
    expect(stringLength(123)).toBeUndefined();
});
