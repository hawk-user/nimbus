
import { ArrayHelpers } from '@ueye/core';
import assert from 'node:assert';

describe('ArrayHelpers specifications', () => {

    describe('findByPredicate', () => {

        it('should find the first element that matches the predicate', () => {
            const array = [1, 2, 3, 4, 5];
            const predicate = (item: number) => item === 3;
            const result = ArrayHelpers.findByPredicate(array, predicate);
            assert.strictEqual(result, 3);
        });

        it('should return undefined if no element matches the predicate', () => {
            const array = [1, 2, 4, 5];
            const predicate = (item: number) => item === 3;
            const result = ArrayHelpers.findByPredicate(array, predicate);
            assert.ok(!result);
        });

        it('should handle empty array', () => {
            const array: number[] = [];
            const predicate = (item: number) => item === 1;
            const result = ArrayHelpers.findByPredicate(array, predicate);
            assert.ok(!result);
        });
        
    });

    describe('removeAtIndex', () => {

        it('should remove the item at the specified index', () => {
            const array = [1, 2, 3, 4, 5];
            ArrayHelpers.removeAtIndex(array, 2);
            assert.deepStrictEqual(array, [1, 2, 4, 5]);
        });

        it('should remove the specified number of items starting from the index', () => {
            const array = [1, 2, 3, 4, 5];
            ArrayHelpers.removeAtIndex(array, 1, 2);
            assert.deepStrictEqual(array, [1, 4, 5]);
        });

        it('should default to removing one item if deleteCount is not specified', () => {
            const array = [1, 2, 3, 4, 5];
            ArrayHelpers.removeAtIndex(array, 1);
            assert.deepStrictEqual(array, [1, 3, 4, 5]);
        });

        it('should handle edge cases where index is out of bounds', () => {
            const array = [1, 2, 3, 4, 5];
            ArrayHelpers.removeAtIndex(array, 10);
            assert.deepStrictEqual(array, [1, 2, 3, 4, 5]);
        });

        it('should handle empty array', () => {
            const array: number[] = [];
            ArrayHelpers.removeAtIndex(array, 0);
            assert.deepStrictEqual(array, []);
        });

    });

    describe('removeByPredicate', () => {

        it('should remove the first item that matches the predicate', () => {
            const array = [1, 2, 3, 4, 5];
            const predicate = (item: number) => item === 3;
            const result = ArrayHelpers.removeByPredicate(array, predicate);
            assert.ok(result);
            assert.deepStrictEqual(array, [1, 2, 4, 5]);
        });

        it('should return false if no item matches the predicate', () => {
            const array = [1, 2, 4, 5];
            const predicate = (item: number) => item === 3;
            const result = ArrayHelpers.removeByPredicate(array, predicate);
            assert.ok(!result);
            assert.deepStrictEqual(array, [1, 2, 4, 5]);
        });

        it('should handle empty array with a predicate', () => {
            const array: number[] = [];
            const predicate = (item: number) => item === 1;
            const result = ArrayHelpers.removeByPredicate(array, predicate);
            assert.ok(!result);
            assert.deepStrictEqual(array, []);
        });

    });

    describe('safePush', () => {

        it('should push item to array if array is defined', () => {
            const array: number[] = [];
            ArrayHelpers.safePush(array, 1);
            assert.ok(array.includes(1))
        });
    
        it('should not throw error if array is undefined', () => {
            assert.doesNotThrow(() => ArrayHelpers.safePush(undefined, 1));
        });

    });

});