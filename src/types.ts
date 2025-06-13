export interface ValidationResult<T> {
    valueOf(): boolean;
    value: T | null;
    empty: ValidationResult<T>;
    throw(): T | null;
}
