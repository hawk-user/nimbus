
import { BaseError as ImportedBaseError } from '@ueye/infra/terminal';

class BaseError extends ImportedBaseError {

    public static testFormat(
        data: Error | string,
        code: number
    ) {
        return this.format(data, code);
    }

}

describe('BaseError specifications', () => {

    it('should format a string message correctly', () => {
        const message = 'string message';
        const code = 100;

        const result = BaseError.testFormat(message, code);
        expect(result).toEqual({ error: `${message}\n`, code });
    });

    it('should format an Error object correctly', () => {
        const error = new Error('Error object');
        const code = 101;

        const result = BaseError.testFormat(error, code);
        expect(result).toEqual({ error: `${error.stack}\n`, code: 101 });
    });

    it('should handle an empty error message correctly', () => {
        const message = '';
        const code = 102;

        const result = BaseError.testFormat(message, code);
        expect(result).toEqual({ error: '\n', code: 102 });
    });

    it('should handle an error with no stack property', () => {
        const error = {} as Error;
        const code = 103;

        const result = BaseError.testFormat(error, code);
        expect(result).toEqual({ error: 'No stack property\n', code: 103 });
    });

});
