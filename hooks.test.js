import { beforeEach, expect, it } from "vitest";
import { User } from "./hooks";

const testEmail = 'test@gmail.com';
let user;

beforeEach(() => {
    user = new User(testEmail);
})

it('should have an email property', () => {
    expect(user).toHaveProperty('email');
});

it('should update the email', () => {
    const newTestEmail = 'test2@gmail.com';

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
});

it('should strore the provided email value', () => {
    expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
    user.clearEmail();

    expect(user.email).toBe('');
});


it('should still have an email property after clearing the email', () => {
    user.clearEmail();

    expect(user).toHaveProperty('email');
});
