
import { NumberHelpers } from '@ueye/core';

describe('NumberHelpers specifications', () => {

    describe('isInteger', () => {

        it('should return true for integers', () => {
            expect(NumberHelpers.isInteger(5)).toBe(true);
            expect(NumberHelpers.isInteger(-5)).toBe(true);
        });
    
        it('should return false for non-integers', () => {
            expect(NumberHelpers.isInteger(5.5)).toBe(false);
            expect(NumberHelpers.isInteger(-5.5)).toBe(false);
        });
    
    });

    describe('isPositive', () => {

        it('should return true for positive numbers', () => {
            expect(NumberHelpers.isPositive(5)).toBe(true);
        });
    
        it('should return false for non-positive numbers', () => {
            expect(NumberHelpers.isPositive(-5)).toBe(false);
            expect(NumberHelpers.isPositive(0)).toBe(false);
            expect(NumberHelpers.isPositive(1)).toBe(true);
        });

    });

    describe('isPositiveInteger', () => {

        it('should return true for positive integers', () => {
            expect(NumberHelpers.isPositiveInteger(5)).toBe(true);
        });
    
        it('should return false for non-positive or non-integer numbers', () => {
            expect(NumberHelpers.isPositiveInteger(-5)).toBe(false);
            expect(NumberHelpers.isPositiveInteger(5.5)).toBe(false);
            expect(NumberHelpers.isPositiveInteger(0)).toBe(false);
        });

    });

    describe('isNotPositiveInteger', () => {

        it('should return true for non-positive or non-integer numbers', () => {
            expect(NumberHelpers.isNotPositiveInteger(-5)).toBe(true);
            expect(NumberHelpers.isNotPositiveInteger(5.5)).toBe(true);
            expect(NumberHelpers.isNotPositiveInteger(0)).toBe(true);
        });
    
        it('should return false for positive integers', () => {
            expect(NumberHelpers.isNotPositiveInteger(5)).toBe(false);
        });

    });

});