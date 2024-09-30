
import { TypeGuard } from '@ueye/core';

describe('TypeGuard specifications', () => {
    
    it('should return the value if it is of the correct type', () => {
        const value = 42;
        const result = TypeGuard.safeCast<number>(
            value,
            (val): val is number => typeof val === 'number',
            () => "Value is of the wrong type"
        );
        expect(result).toBe(value);
    });

    it('should call isWrongTypeOf and throw an error if the value is of the incorrect type', () => {
        const value = "42";
        const isWrongTypeOf = jest.fn(() => { throw new Error('Custom error message') });

        expect(() => {
            TypeGuard.safeCast<number>(
                value,
                (val): val is number => typeof val === 'number',
                isWrongTypeOf
            );
        }).toThrow("Custom error message");

        expect(isWrongTypeOf).toHaveBeenCalled();
    });

    it('should throw the correct error message returned by isWrongTypeOf callback', () => {
        const value = { foo: 'bar' };
        const isWrongTypeOf = jest.fn(() => { throw new Error('This is not a number') });

        expect(() => {
            TypeGuard.safeCast<number>(
                value,
                (val): val is number => typeof val === 'number',
                isWrongTypeOf
            );
        }).toThrow("This is not a number");

        expect(isWrongTypeOf).toHaveBeenCalled();
    });

    it('should throw generic error message returned by isWrongTypeOf callback', () => {
        const value = { foo: 'bar' };
        const isWrongTypeOf = jest.fn(() => true);

        expect(() => {
            TypeGuard.safeCast<number>(
                value,
                (val): val is number => typeof val === 'number',
                isWrongTypeOf
            );
        }).toThrow('Type assertion failed!');

        expect(isWrongTypeOf).toHaveBeenCalled();
    });

});