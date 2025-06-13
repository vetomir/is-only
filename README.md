# IsOnly Validator

Lightweight TypeScript validation library with fluent API.


## API Reference

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

## Fluent API Methods

Each validator returns a `ValidationResult` object with additional methods:

### Methods
- `.value` - Returns validated value or null
- `.empty` - Inverted validation result
- `.throw()` - Throws error on failure, returns value on success

