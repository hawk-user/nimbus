
import { WentWell } from '@ueye/core';

describe('WentWell specifications', () => {

    it('should create an instance with the provided value', () => {
        const value = 'test value';
        const operation = WentWell.create(value);
        expect(operation.getValue()).toBe(value);
    });

    it('should return true for isWentWell()', () => {
        const operation = WentWell.create('test value');
        expect(operation.isWentWell()).toBe(true);
    });

    it('should return false for isGoneWrong()', () => {
        const operation = WentWell.create('test value');
        expect(operation.isGoneWrong()).toBe(false);
    });

    it('should be an instance of WentWell', () => {
        const operation = WentWell.create('test value');
        expect(operation).toBeInstanceOf(WentWell);
    });

    it('should not allow modification of value', () => {
        const operation = WentWell.create('immutable value');
        // @ts-ignore
        expect(() => operation.value = 'modified value').toThrow(
            'Cannot assign to read only property \'value\' of object \'#<WentWell>\''
        )
        expect(operation.getValue()).toBe('immutable value');
    });

    it('should freeze the instance to prevent modifications', () => {
        const operation = WentWell.create('test value');
         // @ts-ignore
         expect(() => operation.newProperty = 'new value').toThrow(
            'Cannot add property newProperty, object is not extensible'
        )
        // @ts-ignore
        expect(operation.newProperty).toBeUndefined();
    });

});