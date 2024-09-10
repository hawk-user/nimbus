
import { ArrayUtils } from '@ueye/utils';

describe('ArrayUtils', () => {

    describe('findByPredicate', () => {

        it('should find the first element that matches the predicate', () => {
            const array = [1, 2, 3, 4, 5];
            const predicate = (item: number) => item === 3;
            const result = ArrayUtils.findByPredicate(array, predicate);
            expect(result).toBe(3);
        });

        it('should return undefined if no element matches the predicate', () => {
            const array = [1, 2, 4, 5];
            const predicate = (item: number) => item === 3;
            const result = ArrayUtils.findByPredicate(array, predicate);
            expect(result).toBeUndefined();
        });

        it('should handle empty array', () => {
            const array: number[] = [];
            const predicate = (item: number) => item === 1;
            const result = ArrayUtils.findByPredicate(array, predicate);
            expect(result).toBeUndefined();
        });
        
    });

    describe('removeAtIndex', () => {

        it('should remove the item at the specified index', () => {
            const array = [1, 2, 3, 4, 5];
            ArrayUtils.removeAtIndex(array, 2);
            expect(array).toEqual([1, 2, 4, 5]);
        });

        it('should remove the specified number of items starting from the index', () => {
            const array = [1, 2, 3, 4, 5];
            ArrayUtils.removeAtIndex(array, 1, 2);
            expect(array).toEqual([1, 4, 5]);
        });

        it('should default to removing one item if deleteCount is not specified', () => {
            const array = [1, 2, 3, 4, 5];
            ArrayUtils.removeAtIndex(array, 1);
            expect(array).toEqual([1, 3, 4, 5]);
        });

        it('should handle edge cases where index is out of bounds', () => {
            const array = [1, 2, 3, 4, 5];
            ArrayUtils.removeAtIndex(array, 10);
            expect(array).toEqual([1, 2, 3, 4, 5]);
        });

        it('should handle empty array', () => {
            const array: number[] = [];
            ArrayUtils.removeAtIndex(array, 0);
            expect(array).toEqual([]);
        });

    });

    describe('removeByPredicate', () => {

        it('should remove the first item that matches the predicate', () => {
            const array = [1, 2, 3, 4, 5];
            const predicate = (item: number) => item === 3;
            const result = ArrayUtils.removeByPredicate(array, predicate);
            expect(result).toBe(true);
            expect(array).toEqual([1, 2, 4, 5]);
        });

        it('should return false if no item matches the predicate', () => {
            const array = [1, 2, 4, 5];
            const predicate = (item: number) => item === 3;
            const result = ArrayUtils.removeByPredicate(array, predicate);
            expect(result).toBe(false);
            expect(array).toEqual([1, 2, 4, 5]);
        });

        it('should handle empty array with a predicate', () => {
            const array: number[] = [];
            const predicate = (item: number) => item === 1;
            const result = ArrayUtils.removeByPredicate(array, predicate);
            expect(result).toBe(false);
            expect(array).toEqual([]);
        });

    });

    describe('safePush', () => {

        test('should push item to array if array is defined', () => {
            const array: number[] = [];
            ArrayUtils.safePush(array, 1);
            expect(array).toContain(1);
        });
    
        test('should not throw error if array is undefined', () => {
            const array: number[] | undefined = undefined;
            expect(() => ArrayUtils.safePush(array, 1)).not.toThrow();
        });

    });

});