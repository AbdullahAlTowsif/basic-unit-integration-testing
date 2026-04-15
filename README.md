# 🧪 Mock & Spy in Testing (Vitest)

This guide explains both **Mocks** and **Spies** with clear concepts and real examples using **Vitest**.

---

# 📌 1. What is a Spy?

A **Spy** is used to track how a function is used during execution.

## 🎯 It helps to:
- Check if a function was called
- Count how many times it was called
- Verify arguments passed

## ✅ Example:

```js
import { vi, expect } from "vitest";

const spyFn = vi.fn();

spyFn("hello");

expect(spyFn).toHaveBeenCalled();
expect(spyFn).toHaveBeenCalledWith("hello");
```

👉 `vi.fn()` creates a **spy function**

---

# 📌 2. What is a Mock?

A **Mock** replaces a real function or module with a fake version.

## 🎯 It is used to:
- Avoid real API/DB/File operations
- Control return values
- Remove side effects

---

## ✅ Example: Mocking a Module

### 🔹 Real function (external dependency)

```js
// mockSpies.io.js
export async function saveTokenFile(data, filename) {
    // writes to file (real side effect)
}
```

---

### 🔹 Mocking it in test

```js
import { describe, it, expect, vi } from "vitest";

// Mock the module
vi.mock('./mockSpies.io.js', () => {
    return {
        saveTokenFile: vi.fn()
    };
});

import { storeToken } from './mockSpies';
import { saveTokenFile } from './mockSpies.io.js';

describe('storeToken', () => {
    it('should call saveTokenFile with correct arguments', async () => {
        await storeToken("abc123");

        expect(saveTokenFile).toHaveBeenCalled();
        expect(saveTokenFile).toHaveBeenCalledWith("abc123", "data.txt");
    });
});
```

👉 Here:
- `saveTokenFile` is **mocked**
- No real file writing happens
- We just verify behavior

---

# 🔥 Spy vs Mock (Important)

| Feature | Spy | Mock |
|--------|-----|------|
| Tracks function calls | ✅ Yes | ✅ Yes |
| Replaces implementation | ❌ No | ✅ Yes |
| Controls return value | ❌ No | ✅ Yes |
| Used for | Behavior checking | Dependency replacement |

---

# 📁 Your Project Example

## 🔹 Main Code

```js
import crypto from 'crypto';
import { saveTokenFile } from './mockSpies.io.js';

function log(message) {
    console.log(message);
}

export function generateToken(logger) {
    const token = crypto.randomBytes(32).toString('hex');
    if (logger) logger(token);
    return token;
}

export async function storeToken(data) {
    if (!data) {
        throw new Error('No Token received');
    }
    await saveTokenFile(data, 'data.txt');
}
```

---

# 🧪 Spy Test Example

```js
import { describe, expect, it, vi } from "vitest";
import { generateToken } from "./mockSpies";

describe('generateToken', () => {
    it('should execute the logger function if passed', () => {
        const loggerFn = vi.fn();

        generateToken(loggerFn);

        expect(loggerFn).toHaveBeenCalled();
    });
});
```

---

# 🧪 Mock Test Example

```js
import { describe, it, expect, vi } from "vitest";

// Mock external dependency
vi.mock('./mockSpies.io.js', () => ({
    saveTokenFile: vi.fn()
}));

import { storeToken } from './mockSpies';
import { saveTokenFile } from './mockSpies.io.js';

describe('storeToken', () => {
    it('should store token using saveTokenFile', async () => {
        await storeToken("test-token");

        expect(saveTokenFile).toHaveBeenCalledWith("test-token", "data.txt");
    });
});
```

---

# 🚀 When to Use What?

## ✅ Use Spy when:
- You want to track function calls
- You want to verify behavior

## ✅ Use Mock when:
- You want to replace external dependencies
- You want to avoid side effects (file, DB, API)

---

# 💡 Real-World Insight

👉 In your code:

```js
saveTokenFile(data, 'data.txt');
```

- This should be **mocked**
- Because it's a file operation (side effect)

---

# 🎯 Interview Answer (Golden Line)

**Q: Difference between Mock and Spy?**

👉 Answer:
"A Spy tracks how a function is used, while a Mock replaces the actual implementation with a controlled version."

---

# 📚 Summary

- **Spy = Observe behavior**
- **Mock = Replace behavior**
- `vi.fn()` → Spy (can act as mock too)
- `vi.mock()` → Full module mock

---
