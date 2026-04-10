import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";
import CryptoJS from "crypto-js";

beforeAll(() => {
    console.log("Before All");
});

afterAll(() => {
    console.log("After All");
});

beforeEach(() => {
    console.log("Before Each");
});

afterEach(() => {
    console.log("After Each");
});


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


it('should encrypt the message correctly', async () => {
    const message = 'hello world';
    const key = 'secret';
    const encryptedMessage = await encryptMessagePromise(message, key);
    expect(encryptedMessage).toBeDefined();

    const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
    expect(decryptedMessage).toBe(message);
});

