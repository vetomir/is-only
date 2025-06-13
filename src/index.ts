import {ValidationResult} from './types';

class ValidatorResult<T> implements ValidationResult<T> {
    private _isValid: boolean;
    private _originalValue: any;
    private _validValue: T | null;

    constructor(isValid: boolean, originalValue: any, validValue: T | null = null) {
        this._isValid = isValid;
        this._originalValue = originalValue;
        this._validValue = validValue;
    }

    valueOf(): boolean {
        return this._isValid;
    }

    get value(): T | null {
        return this._isValid ? this._validValue : null;
    }

    get empty() {
        return new ValidatorResult<T>(!this._isValid, this._originalValue, this._validValue);
    }

    throw(): T | null {
        if (!this._isValid) {
            throw new Error(`Validation failed for value: ${this._originalValue}`);
        }
        return this._validValue;
    }
}

export const isOnly = {
    String: (val: any): ValidationResult<string> => {
        const isValid = typeof val === 'string' && val.trim().length > 0;
        return new ValidatorResult<string>(isValid, val, isValid ? val : null);
    },

    Number: (val: any): ValidationResult<number> => {
        const isValid = typeof val === 'number' && !isNaN(val) && val !== 0;
        return new ValidatorResult<number>(isValid, val, isValid ? val : null);
    },

    Boolean: (val: any): ValidationResult<boolean> => {
        const isValid = typeof val === 'boolean' && val;
        return new ValidatorResult<boolean>(isValid, val, isValid ? val : null);
    },

    Object: (val: any): ValidationResult<object> => {
        const isValid = typeof val === 'object' && val !== null && !Array.isArray(val) && Object.keys(val).length > 0;
        return new ValidatorResult<object>(isValid, val, isValid ? val : null);
    },

    Array: (val: any): ValidationResult<any[]> => {
        const isValid = Array.isArray(val) && val.length > 0;
        return new ValidatorResult<any[]>(isValid, val, isValid ? val : null);
    }
};

export {ValidationResult};
export default isOnly;
