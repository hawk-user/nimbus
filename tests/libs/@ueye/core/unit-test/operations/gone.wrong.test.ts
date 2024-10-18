
import { GoneWrong } from '@ueye/core';
import assert from 'node:assert';

describe('GoneWrong specifications', () => {

    it('should create an instance with the provided value', () => {
        const value = 'test value';
        const operation = GoneWrong.create(value);
        assert.strictEqual(operation.getValue(), value);
    });

    it('should return true for isGoneWrong()', () => {
        const operation = GoneWrong.create('test value');
        assert.ok(operation.isGoneWrong());
    });

    it('should return false for isWentWell()', () => {
        const operation = GoneWrong.create('test value');
        assert.ok(!operation.isWentWell());
    });

    it('should be an instance of GoneWrong', () => {
        const operation = GoneWrong.create('test value');
        assert.ok(operation instanceof GoneWrong);
    });

    it('should not allow modification of value', () => {
        const operation = GoneWrong.create('immutable value') as any;

        const modification = () => operation.newProperty = 'new value';
        const msg = 'Cannot assign to read only property \'value\' of object \'#<GoneWrong>\'';

        assert.throws(modification, msg);
        assert.strictEqual(operation.getValue(), 'immutable value');
    });

    it('should freeze the instance to prevent modifications', () => {
        const operation = GoneWrong.create('test value') as any;
        
        const modification = () => operation.newProperty = 'new value';

        assert.throws(modification);
        assert.ok(!operation.newProperty);
    });

});