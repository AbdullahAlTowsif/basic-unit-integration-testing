import { describe, expect, it, vi } from "vitest";
import { generateToken } from "./mockSpies";

describe('generateToken(', () => {
    it('should execute the logger function if passed', () => {
        const loggerFn = vi.fn();
        generateToken(loggerFn);

        expect(loggerFn).toHaveBeenCalled();
    });
});