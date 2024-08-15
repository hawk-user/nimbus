
import { GoneWrong } from '@ueye/core';

describe('GoneWrong specifications', () => {

    it('should create an instance with the provided value', () => {
        const value = 'test value';
        const operation = GoneWrong.create(value);
        expect(operation.getValue()).toBe(value);
    });

    it('should return true for isGoneWrong()', () => {
        const operation = GoneWrong.create('test value');
        expect(operation.isGoneWrong()).toBe(true);
    });

    it('should return false for isWentWell()', () => {
        const operation = GoneWrong.create('test value');
        expect(operation.isWentWell()).toBe(false);
    });

    it('should be an instance of GoneWrong', () => {
        const operation = GoneWrong.create('test value');
        expect(operation).toBeInstanceOf(GoneWrong);
    });

    it('should not allow modification of value', () => {
        const operation = GoneWrong.create('immutable value');
        // @ts-ignore
        expect(() => operation.value = 'modified value').toThrow(
            'Cannot assign to read only property \'value\' of object \'#<GoneWrong>\''
        )
        expect(operation.getValue()).toBe('immutable value');
    });

    it('should freeze the instance to prevent modifications', () => {
        const operation = GoneWrong.create('test value');
        // @ts-ignore
        expect(() => operation.newProperty = 'new value').toThrow(
            'Cannot add property newProperty, object is not extensible'
        )
        // @ts-ignore
        expect(operation.newProperty).toBeUndefined();
    });

});