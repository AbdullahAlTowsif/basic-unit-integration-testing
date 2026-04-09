import CryptoJS from "crypto-js";

export function encryptMessage(message, key, callback) {
    const encryptMessage = CryptoJS.AES.encrypt(message, key).toString();
    callback(encryptMessage);
};

export function encryptMessagePromise(message, key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
            if (encryptMessage) {
                resolve(encryptedMessage);
            }
            else {
                reject(new Error('Failed to encrypt message'));
            }
        }, 2000);
    });
};

const message = {
    name: "Mizan",
    password: '11223344'
};

const secretKey = 'ABCDEFHGDLIFHDUSHGRG';
encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
    console.log("Callback: ", encryptedMessage);
});

encryptMessagePromise(JSON.stringify(message), secretKey).then(
    (encryptedMessage) => console.log("Promise: ", encryptedMessage)
);
