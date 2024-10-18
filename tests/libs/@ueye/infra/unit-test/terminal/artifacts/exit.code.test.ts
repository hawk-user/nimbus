
import { ExitCode } from '@ueye/infra/terminal';
import assert from 'node:assert';

describe(`ExitCode specifications`, () => {

    it('should create a valid output code if the number 0 is entered', () => {
        const exitCode = ExitCode.create(0);
        assert.strictEqual(exitCode, 0);
    });

    it('should create a valid exit code if the number 254 is entered', () => {
        const exitCode = ExitCode.create(254);
        assert.strictEqual(exitCode, 254);
    });

    it('should create a valid exit code if the number 254 is entered', () => {
        const exitCode = ExitCode.create(255);
        assert.strictEqual(exitCode, 255);
    });

    it('should cause an error if the output code is less than 0', () => {
        const msg = 'Invalid exit code: -1. Exit code must be between 0 and 255.';
        assert.throws(() => ExitCode.create(-1), new Error(msg));
    });

    it('should cause an error if the output code is greater than 255', () => {
        const msg = 'Invalid exit code: 256. Exit code must be between 0 and 255.';
        assert.throws(() => ExitCode.create(256), new Error(msg));
    });

    it('should validate an exit code within the correct range', () => {
        assert.strictEqual((ExitCode as any).isValid(0), true);
        assert.strictEqual((ExitCode as any).isValid(255), true);
    });

    it('should invalidate an exit code that is not in the correct range', () => {
        assert.strictEqual((ExitCode as any).isValid(-1), false);
        assert.strictEqual((ExitCode as any).isValid(256), false);
    });

});