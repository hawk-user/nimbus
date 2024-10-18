
import { Operation } from '@ueye/core';
import assert from 'node:assert';

describe('Operation', () => {

    it('should create a successful operation with a positive outcome', () => {
        const operation = Operation.successful('success');
        assert.strictEqual(operation.positiveOutcome(), 'success');
    });

    it('should create a failed operation with a negative outcome', () => {
        const operation = Operation.failure('failure');
        assert.strictEqual(operation.negativeOutcome(), 'failure');
    });

    it('should throw an error when accessing positiveOutcome of a failed operation', () => {
        const operation = Operation.failure('failure');
        const message = 'Unable to get a positive outcome for a failure operation. Use \'negativeOutcome\' instead.';
        const outcome = () => operation.positiveOutcome();

        assert.throws(outcome, new Error(message));
    });

    it('should throw an error when accessing negativeOutcome of a successful operation', () => {
        const operation = Operation.successful('success');
        const message = 'Unable to get a negative outcome for a successful operation. Use \'positiveOutcome\' instead.';
        const outcome = () => operation.negativeOutcome();

        assert.throws(outcome, new Error(message));
    });

    it('should return a failure operation if an operation fails during the merge', () => {
        const failureOp = Operation.failure('error');
        const successOp = Operation.successful('success');
        const result = Operation.merge([successOp, failureOp]);
        assert.strictEqual(result.negativeOutcome(), 'error');
    });

    it('should return a successful operation with the result of the first successful operation', () => {
        const successOp1 = Operation.successful('success1');
        const successOp2 = Operation.successful('success2');
        const result = Operation.merge([successOp1, successOp2]);
        assert.strictEqual(result.positiveOutcome(), 'success1');
    });

    it('should return a failure operation if the array is empty', () => {
        const result = Operation.merge([]);
        assert.strictEqual(result.negativeOutcome(), 'Unable to merge an empty operation table.');
    });

    it('should correctly handle a mix of success and failure operations', () => {
        const failureOp = Operation.failure('error');
        const successOp = Operation.successful('success');
        const result = Operation.merge([successOp, successOp, failureOp]);
        assert.strictEqual(result.negativeOutcome(), 'error');
    });

    it('should freeze the instance to ensure immutability', () => {
        const outcome = Operation.successful('success');
        assert.ok(Object.isFrozen(outcome));
    });

});