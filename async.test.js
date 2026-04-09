import { expect, it } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";

it('should encrypt a message', async () => {
    const message = 'Program every day';
    const secretKey = '8394765idhfgsal';

    const encryptedData = await new Promise((resolve, reject) => {
        encryptMessage(message, secretKey, (message) => {
            resolve(message)
        })
    })

    expect(encryptedData).toBeDefined();
});

it('should also encrypt a message', async () => {
    const message = 'Hello';
    const secretKey = '94etksdfugh';
    const encryptedData = await encryptMessagePromise(message, secretKey);
    expect(encryptedData).toBeDefined();
});

