
import { WentWell } from '@ueye/core';
import assert from 'node:assert';

describe('WentWell specifications', () => {

    it('should create an instance with the provided value', () => {
        const value = 'test value';
        const operation = WentWell.create(value);
        assert.strictEqual(operation.getValue(), value);
    });

    it('should return true for isWentWell()', () => {
        const operation = WentWell.create('test value');
        assert.ok(operation.isWentWell());
    });

    it('should return false for isGoneWrong()', () => {
        const operation = WentWell.create('test value');
        assert.ok(!operation.isGoneWrong());
    });

    it('should be an instance of WentWell', () => {
        const operation = WentWell.create('test value');
        assert.ok(operation instanceof WentWell);
    });

    it('should not allow modification of value', () => {
        const operation = WentWell.create('immutable value') as any;

        const modification = () => operation.newProperty = 'new value';
        const msg = 'Cannot assign to read only property \'value\' of object \'#<WentWell>\'';

        assert.throws(modification, msg);
        assert.strictEqual(operation.getValue(), 'immutable value');
    });

    it('should freeze the instance to prevent modifications', () => {
        const operation = WentWell.create('test value') as any;
        
        const modification = () => operation.newProperty = 'new value';

        assert.throws(modification);
        assert.ok(!operation.newProperty);
    });

});