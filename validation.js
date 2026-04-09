export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email) || email === null || email === undefined) {
        throw new Error ('Invalid email address');
    }
}

export function validateArrayNotEmpty(arr) {
    if(!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Array can not be empty");
    }
}

