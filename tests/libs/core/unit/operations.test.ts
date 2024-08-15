
import { Operation } from '@ueye/core';

describe('Operation', () => {

    it('should create a successful operation with a positive outcome', () => {
        const positiveValue = 'success';
        const operation = Operation.successful(positiveValue);

        expect(operation.isSuccess).toBe(true);
        expect(operation.positiveOutcome()).toBe(positiveValue);
    });

    it('should create a failed operation with a negative outcome', () => {
        const negativeValue = 'failure';
        const operation = Operation.failure(negativeValue);

        expect(operation.isSuccess).toBe(false);
        expect(operation.negativeOutcome()).toBe(negativeValue);
    });

    it('should throw an error when accessing positiveOutcome of a failed operation', () => {
        const operation = Operation.failure('failure');

        expect(() => operation.positiveOutcome()).toThrow(
            'Unable to get a positive outcome for a failure operation. Use \'negativeOutcome\' instead.'
        );
    });

    it('should throw an error when accessing negativeOutcome of a successful operation', () => {
        const operation = Operation.successful('success');

        expect(() => operation.negativeOutcome()).toThrow(
            'Unable to get a negative outcome for a successful operation. Use \'positiveOutcome\' instead.'
        );
    });

    it('should freeze the instance to prevent modifications', () => {
        const operation = Operation.successful('success');
        // @ts-ignore
        expect(() => operation.isSuccess = false).toThrow(
            'Cannot assign to read only property \'isSuccess\' of object \'#<Operation>\''
        );
        expect(operation.isSuccess).toBe(true);
    });

    it('should return a failure operation if any operation fails', () => {
        const failureOp = Operation.failure('error');
        const successOp = Operation.successful('success');

        const result = Operation.merge([successOp, failureOp]);

        expect(result.isSuccess).toBe(false);
        expect(result.negativeOutcome()).toBe('error');
    });

    it('should return a successful operation with the result of the first successful operation', () => {
        const successOp1 = Operation.successful('success1');
        const successOp2 = Operation.successful('success2');

        const result = Operation.merge([successOp1, successOp2]);

        expect(result.isSuccess).toBe(true);
        expect(result.positiveOutcome()).toBe('success1');
    });

    it('should return a failure operation if the array is empty', () => {
        const result = Operation.merge([]);

        expect(result.isSuccess).toBe(false);
        expect(result.negativeOutcome()).toBe('Unable to merge an empty operation table.');
    });

    it('should correctly handle a mix of success and failure operations', () => {
        const failureOp = Operation.failure('error');
        const successOp = Operation.successful('success');

        const result = Operation.merge([successOp, successOp, failureOp]);

        expect(result.isSuccess).toBe(false);
        expect(result.negativeOutcome()).toBe('error');
    });

    it('should handle cases where all operations are successful', () => {
        const successOp1 = Operation.successful('success1');
        const successOp2 = Operation.successful('success2');

        const result = Operation.merge([successOp1, successOp2]);

        expect(result.isSuccess).toBe(true);
        expect(result.positiveOutcome()).toBe('success1');
    });

});