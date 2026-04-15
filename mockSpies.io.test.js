import { expect, it, vi } from "vitest";
import { saveTokenFile } from "./mockSpies.io";
import { promises as fs } from 'fs';

vi.mock('fs', () => ({
    promises: {
        writeFile: vi.fn()
    }
}));

it('should store the token to the file', () => {
    const data = 'dummy token';
    const fileName = 'token.txt';

    saveTokenFile(data, fileName);
    // expect(saveTokenFile(data, fileName)).resolves.toBeUndefined();
    expect(fs.writeFile).toHaveBeenCalled();
});
