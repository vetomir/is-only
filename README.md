# IsOnly Validator
[![NPM Version](https://img.shields.io/npm/v/is-only)](https://www.npmjs.com/package/is-only)

🎯 Lightweight TypeScript validation library with fluent API for filtering and validating required fields in requests.

## 🚀 Installation

## NPM
```
https://www.npmjs.com/package/is-only

npm install is-only
```

## ⚡ Quick Start
```
import { isOnly } from 'is-only';

// Basic validation
if (isOnly.String('hello')) {
console.log('Valid string!');
}

// Access validated value
const result = isOnly.String('hello');
console.log(result.value); // 'hello'

// Check for empty values
if (isOnly.String('').empty) {
console.log('String is empty!');
}

// Throw on validation failure
try {
const value = isOnly.String('').throw();
} catch (error) {
console.log('Validation failed!');
}
```
## 🎯 Why Choose IsOnly Validator?

### ✨ **Clean & Readable Code**
Transform verbose validation logic into elegant one-liners:
```
// ❌ Before: Verbose and error-prone
if (typeof value === 'string' && value.trim().length > 0) {
// logic
}

// ✅ After: Clean and expressive
if (isOnly.String(value)) {
// logic
}
```
### 🔒 **TypeScript Type Safety**
Built-in **type guards** that make TypeScript understand your data:
```
function processData(input: unknown) {
if (isOnly.String(input)) {
// ✅ TypeScript knows input is string
console.log(input.toUpperCase()); 
// No errors!
}}
```

### 🚀 **Powerful Fluent API**
Every validation returns a rich object with additional methods:
```
const result = isOnly.String(userInput);

result.value // string | null - safe access
result.empty // inverted validation
result.throw() // throws on failure, returns value on success
```

### 📦 **Lightweight & Zero Dependencies**
- 🪶 **< 5KB minified** - won't bloat your bundle
- 🚫 **Zero dependencies** - no supply chain risks
- 🌳 **Tree-shakable** - import only what you use

### 💡 **Eliminates JavaScript Gotchas**
Avoid common JavaScript pitfalls:
```
// ❌ Problematic: falsy for 0, '', false, []
if (value) { }

// ✅ Explicit: only valid numbers
if (isOnly.Number(value)) { }

// ✅ Explicit: only non-empty strings
if (isOnly.String(value)) { }
```

## 📚 API Reference

### `isOnly.String(val)`
Validates non-empty strings.

**Returns `true` for:**
- `'hello'`
- `' test '`

**Returns `false` for:**
- `''` (empty string)
- `'  '` (only spaces)
- `null`, `undefined`, different types

---

### `isOnly.Number(val)`
Validates valid numbers (excluding zero and NaN).

**Returns `true` for:**
- `1`
- `-5`
- `3.14`

**Returns `false` for:**
- `'123'` (string)
- `0` (zero)
- `NaN` (not a number)
- `null`, `undefined`, different types

---

### `isOnly.Boolean(val)`
Validates boolean `true` values only.

**Returns `true` for:**
- `true`

**Returns `false` for:**
- `false`
- `1`, `0`, `'true'`, `null`, `undefined`, different types

---

### `isOnly.Object(val)`
Validates non-empty objects (excluding arrays).

**Returns `true` for:**
- `{a: 1}`
- `{ key: 'value' }`

**Returns `false` for:**
- `{}` (empty object)
- `[]` (array)
- `null`, `undefined`, `'string'`, `0`, different types

---

### `isOnly.Array(val)`
Validates non-empty arrays.

**Returns `true` for:**
- `[1, 2, 3]`
- `['a']`

**Returns `false` for:**
- `[]` (empty array)
- `''` (empty string)
- `'  '` (only spaces)
- `null`, `undefined`, different types

---

### `isOnly.Failure(val)`
Returns `true` for values that fail all other validations.

**Returns `true` for:**
- `null`, `undefined`
- `''`, `'  '`
- `0`, `false`
- `{}`, `[]`

**Returns `false` for:**
- Any value that passes String, Number, Boolean, Object, or Array validation (non-empty values)

## 🔧 Fluent API Methods

Each validator returns a `ValidationResult` object with additional methods:

### `.value`
Returns the validated value if validation passes, `null` otherwise.
```
const result = isOnly.String('hello');
console.log(result.value); // 'hello'

const failed = isOnly.String('');
console.log(failed.value); // null
```

### `.empty`
Returns the inverted validation result.
```
if (isOnly.String('').empty) {
console.log('String is empty!'); // This will execute
}

if (isOnly.String('hello').empty) {
console.log('This will not execute');
}
```
### `.throw()`
Throws an error if validation fails, returns the value if it passes.

try {
const value = isOnly.String('hello').throw(); // Returns 'hello'
const invalid = isOnly.String('').throw(); // Throws error
} catch (error) {
console.log('Validation failed!');
}

## 🎯 Use Cases

### 🌐 **API Request Validation**
```
function validateUser(data: any) {
if (!isOnly.String(data.email)) throw new Error('Email required');
if (!isOnly.Number(data.age)) throw new Error('Valid age required');

return { email: data.email, age: data.age }; // ✅ Type-safe
}
```
### 📝 **Form Data Processing**
```
function filterFormData(formData: any) {
const filtered: any = {};

if (isOnly.String(formData.email)) {
filtered.email = formData.email;
}

if (isOnly.Number(formData.phone)) {
filtered.phone = formData.phone;
}

return filtered;
}
```
### 🧹 **Data Sanitization**
```
// ❌ Before: Complex nested conditions
if (user.settings && typeof user.settings === 'object' &&
Object.keys(user.settings).length > 0) {
applySettings(user.settings);
}

// ✅ After: Simple and clear
if (isOnly.Object(user.settings)) {
applySettings(user.settings.value);
}
```

## 🏆 **Perfect For**
- 🌐 **API request validation**
- 📝 **Form data processing** 
- 🧹 **Data sanitization**
- 🔍 **Input filtering**
- ⚡ **Runtime type checking**

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

If you find any issues, please report them on [GitHub Issues](https://github.com/your-username/is-only/issues).

---

**IsOnly Validator** - Because your data validation should be as reliable as your code! 🎯

