
import { Negative } from '@ueye/core';

describe('Negative', () => {

    it('should create an instance with the provided value', () => {
        const value = 'test value';
        const negative = Negative.create(value);
        expect(negative.getValue()).toBe(value);
    });

    it('should return true for isNegative()', () => {
        const negative = Negative.create('test value');
        expect(negative.isNegative()).toBe(true);
    });

    it('should return false for isPositive()', () => {
        const negative = Negative.create('test value');
        expect(negative.isPositive()).toBe(false);
    });

    it('should be an instance of Negative', () => {
        const negative = Negative.create('test value');
        expect(negative).toBeInstanceOf(Negative);
    });

    it('should not allow modification of value', () => {
        const negative = Negative.create('immutable value');
        // @ts-ignore
        expect(() => negative.value = 'modified value').toThrow(
            'Cannot assign to read only property \'value\' of object \'#<Negative>\''
        )
        expect(negative.getValue()).toBe('immutable value');
    });

    it('should freeze the instance to prevent modifications', () => {
        const negative = Negative.create('test value');
        // @ts-ignore
        expect(() => negative.newProperty = 'new value').toThrow(
            'Cannot add property newProperty, object is not extensible'
        )
        // @ts-ignore
        expect(negative.newProperty).toBeUndefined();
    });

});