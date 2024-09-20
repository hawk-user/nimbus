
import { TypeGuard } from '@ueye/core';

function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

describe('TypeGuard specifications', () => {
    
    test('should return the value if the condition is true', () => {
        const value: unknown = 'Hello, World!';
        const result = TypeGuard.safeCast<string>(
            value,
            () => isString(value),
            'Value must be a string'
        );
        expect(result).toBe('Hello, World!');
    });

    test('should throw an error if the condition is false', () => {
        const value: unknown = 42;
        expect(() => {
            TypeGuard.safeCast<string>(
                value,
                () => isString(value),
                'Value must be a string'
            );
        }).toThrow('Value must be a string');
    });

    test('should handle different types correctly', () => {
        const stringValue: unknown = 'Test';
        const numberValue: unknown = 123;

        const stringResult = TypeGuard.safeCast<string>(
            stringValue,
            () => isString(stringValue),
            'Expected a string'
        );
        expect(stringResult).toBe('Test');

        const numberResult = TypeGuard.safeCast<number>(
            numberValue,
            () => isNumber(numberValue),
            'Expected a number'
        );
        expect(numberResult).toBe(123);
    });

    test('should throw error with different type guards', () => {
        const value: unknown = 'Not a number';
        expect(() => {
            TypeGuard.safeCast<number>(
                value,
                () => isNumber(value),
                'Expected a number'
            );
        }).toThrow('Expected a number');
    });

});