import crypto from 'crypto';
import { saveTokenFile } from './mockSpies.io.js';

function log(message) {
    console.log(message);
}

export function generateToken(logger) {
    const token = crypto.randomBytes(32).toString('hex');
    if(logger) logger(token);
    return token;
}

export async function storeToken(data) {
    if(!data) {
        throw new Error('No Token received');
    }
    await saveTokenFile(data, 'data.txt');
}

const data = generateToken(log);
storeToken(data);
