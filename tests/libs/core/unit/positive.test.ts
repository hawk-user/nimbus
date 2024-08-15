
import { Positive } from '@ueye/core';

describe('Positive specifications', () => {

    it('should create an instance with the provided value', () => {
        const value = 'test value';
        const positive = Positive.create(value);
        expect(positive.getValue()).toBe(value);
    });

    it('should return true for isPositive()', () => {
        const positive = Positive.create('test value');
        expect(positive.isPositive()).toBe(true);
    });

    it('should return false for isNegative()', () => {
        const positive = Positive.create('test value');
        expect(positive.isNegative()).toBe(false);
    });

    it('should be an instance of Negative', () => {
        const positive = Positive.create('test value');
        expect(positive).toBeInstanceOf(Positive);
    });

    it('should not allow modification of value', () => {
        const positive = Positive.create('immutable value');
        // @ts-ignore
        expect(() => positive.value = 'modified value').toThrow(
            'Cannot assign to read only property \'value\' of object \'#<Positive>\''
        )
        expect(positive.getValue()).toBe('immutable value');
    });

    it('should freeze the instance to prevent modifications', () => {
        const positive = Positive.create('test value');
         // @ts-ignore
         expect(() => positive.newProperty = 'new value').toThrow(
            'Cannot add property newProperty, object is not extensible'
        )
        // @ts-ignore
        expect(positive.newProperty).toBeUndefined();
    });

});