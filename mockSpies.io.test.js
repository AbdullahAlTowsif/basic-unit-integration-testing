import { expect, it, vi } from "vitest";
import { saveTokenFile } from "./mockSpies.io";
import { promises as fs } from 'fs';
import path from "./__mocks__/path";

vi.mock('fs', () => ({
    promises: {
        writeFile: vi.fn()
    }
}));

// vi.mock('path', () => {
//     return {
//         default: {
//             join: (...args) => args[args.length - 1]
//         }
//     }
// })

vi.mock('path', () => {
    return {
        default: path
    }
})

it('should store the token to the file', () => {
    const data = 'dummy token';
    const fileName = 'token.txt';

    saveTokenFile(data, fileName);
    // expect(saveTokenFile(data, fileName)).resolves.toBeUndefined();
    // expect(fs.writeFile).toHaveBeenCalled();
    expect(fs.writeFile).toBeCalledWith(fileName, data);
});
