
import { NumberHelpers } from '@ueye/core';

describe('NumberHelpers specifications', () => {

    describe('isGreaterThanOne', () => {
        it('should return true for numbers greater than one', () => {
            expect(NumberHelpers.isGreaterThanOne(2)).toBe(true);
            expect(NumberHelpers.isGreaterThanOne(1.5)).toBe(true);
        });

        it('should return false for numbers less than or equal to one', () => {
            expect(NumberHelpers.isGreaterThanOne(1)).toBe(false);
            expect(NumberHelpers.isGreaterThanOne(0)).toBe(false);
            expect(NumberHelpers.isGreaterThanOne(-1)).toBe(false);
        });
    });

    describe('minus', () => {
        it('should correctly subtract the second number from the first', () => {
            expect(NumberHelpers.minus(5, 3)).toBe(2);
            expect(NumberHelpers.minus(10, 7)).toBe(3);
            expect(NumberHelpers.minus(-5, -3)).toBe(-2);
        });
    });

    describe('minusOne', () => {
        it('should subtract one from the given number', () => {
            expect(NumberHelpers.minusOne(5)).toBe(4);
            expect(NumberHelpers.minusOne(1)).toBe(0);
            expect(NumberHelpers.minusOne(0)).toBe(-1);
        });
    });

});