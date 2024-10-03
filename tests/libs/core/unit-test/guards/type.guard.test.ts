
import { TypeGuard } from '@ueye/core';
import assert from 'node:assert';
import sinon from 'sinon';

describe('TypeGuard specifications', () => {
    
    it('should return the value if it is of the correct type', () => {
        const value = 42;
        const result = TypeGuard.safeCast<number>(
            value,
            (val): val is number => typeof val === 'number',
            () => 'Value is of the wrong type'
        );
        assert.strictEqual(result, value);
    });

    it('should call isWrongTypeOf and throw an error if the value is of the incorrect type', () => {
        const value = '42';
        const error =  new Error('Custom error message');
        const isWrongTypeOf = sinon.fake(() => { throw error });
        
        const guard = () => TypeGuard.safeCast<number>(
            value,
            (val): val is number => typeof val === 'number',
            isWrongTypeOf
        )

        assert.throws(guard, error);
        assert.ok(isWrongTypeOf.calledOnce);
    });

    it('should throw generic error message returned by isWrongTypeOf callback', () => {
        const value = { foo: 'bar' };
        const isWrongTypeOf = sinon.fake(() => true);
        const error =  new Error('Type assertion failed!');

        const guard = () => TypeGuard.safeCast<number>(
            value,
            (val): val is number => typeof val === 'number',
            isWrongTypeOf
        )

        assert.throws(guard, error);
        assert.ok(isWrongTypeOf.calledOnce);
    });

});