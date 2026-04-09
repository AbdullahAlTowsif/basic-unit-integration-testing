// unit test

import { expect, it } from "vitest";
import { transformToNumber } from "./transformToNumber";

it('should return a number if a numeric string is provided', () => {
    const stringNumber = '5';
    const result = transformToNumber(stringNumber);

    expect(result).toBeTypeOf('number');
    expect(isNaN(result)).not.toBe(true);
})
