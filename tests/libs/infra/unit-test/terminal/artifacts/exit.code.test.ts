
import { ExitCode } from '@ueye/infra/terminal';

describe('ExitCode specifications', () => {

    it('should create a valid exit code for DONE', () => {
        expect(ExitCode.create(0)).toBe(0);
    });

    it('should create a valid exit code for MAX_INPUT_ATTEMPTS_REACHED', () => {
        expect(ExitCode.create(254)).toBe(254);
    });

    it('should create a valid exit code for UNSPECIFIED_ERROR', () => {
        expect(ExitCode.create(255)).toBe(255);
    });

    it('should throw an error for an invalid exit code', () => {
        expect(() => ExitCode.create(-1)).toThrow('Invalid exit code: -1. Exit code must be between 0 and 255.');
        expect(() => ExitCode.create(256)).toThrow('Invalid exit code: 256. Exit code must be between 0 and 255.');
    });

    it('should validate a correct exit code range', () => {
        expect((ExitCode as any).isValid(0)).toBe(true);
        expect((ExitCode as any).isValid(255)).toBe(true);
    });

    it('should invalidate an incorrect exit code range', () => {
        expect((ExitCode as any).isValid(-1)).toBe(false);
        expect((ExitCode as any).isValid(256)).toBe(false);
    });

});