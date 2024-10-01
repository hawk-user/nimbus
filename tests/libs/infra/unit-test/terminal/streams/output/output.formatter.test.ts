
import { OutputFormatter, Prompt } from '@ueye/infra/terminal';

describe('Output specifications', () => {

    describe('formatPrompt', () => {

        it('should format string data correctly', () => {
            const data = 'Test message';
            const expected: Prompt = { message: 'Test message\n' };
            const result = (OutputFormatter as any).formatPrompt(data);
            expect(result).toEqual(expected);
        });

        it('should format object data correctly', () => {
            const data = { key: 'value' };
            const expected: Prompt = { message: '{"key":"value"}\n' };
            const result = (OutputFormatter as any).formatPrompt(data);
            expect(result).toEqual(expected);
        });

    });

    describe('formatError', () => {

        it('should format Error object correctly', () => {
            const error = new Error('Test error');
            const expected: Prompt = { message: `${error.stack}\n` };
            const result = (OutputFormatter as any).formatError(error);
            expect(result).toEqual(expected);
        });

        it('should format string error correctly', () => {
            const error = 'Test error';
            const expected: Prompt = { message: 'Test error\n' };
            const result = (OutputFormatter as any).formatError(error);
            expect(result).toEqual(expected);
        });

        it('should handle undefined error', () => {
            const expected: Prompt = { message: 'No stack property\n' };
            const result = (OutputFormatter as any).formatError(undefined);
            expect(result).toEqual(expected);
        });

    });

    describe('formatDone', () => {

        it('should format done message with default data', () => {
            const expected = {
                prompt: { message: 'Done!\n' },
                exitCode: 0,
            };
            const result = OutputFormatter.formatDone();
            expect(result).toEqual(expected);
        });

        it('should format done message with provided data', () => {
            const data = 'Completed!';
            const expected = {
                prompt: { message: 'Completed!\n' },
                exitCode: 0,
            };
            const result = OutputFormatter.formatDone(data);
            expect(result).toEqual(expected);
        });

    });

    describe('formatUnspecifiedError', () => {

        it('should format unspecified error with default message', () => {
            const expected = {
                prompt: { message: 'An unspecified error occurred. No error case matched!\n' },
                exitCode: 255,
            };
            const result = OutputFormatter.formatUnspecifiedError();
            expect(result).toEqual(expected);
        });

        it('should format unspecified error with provided error', () => {
            const error = new Error('Test unspecified error');
            const expected = {
                prompt: { message: `${error.stack}\n` },
                exitCode: 255,
            };
            const result = OutputFormatter.formatUnspecifiedError(error);
            expect(result).toEqual(expected);
        });

    });

    describe('formatSpecifiedError', () => {

        it('should format specified error correctly', () => {
            const error = new Error('Test specified error');
            const expected = {
                prompt: { message: `${error.stack}\n` },
                exitCode: 200,
            };
            const result = OutputFormatter.formatSpecifiedError(error, 200 as any);
            expect(result).toEqual(expected);
        });

    });

    describe('formatMissingData', () => {

        it('should return formatted error with default message when no error is provided', () => {
            const defaultError = new Error('Required data not supplied.');
            const expectedOutput = {
                exitCode: 254,
                prompt: {
                    message: `Error: ${defaultError.message}\n    at Function.formatMissingData`
                }
            };
    
            const result = OutputFormatter.formatMissingData();

            expect(result.exitCode).toEqual(expectedOutput.exitCode);
            expect(result.prompt.message).toContain(expectedOutput.prompt.message);
        });

        it('should return formatted error with provided error message', () => {
            const customError = new Error('Custom error message.');
            const expectedOutput = {
                exitCode: 254,
                prompt: {
                    message: `Error: ${customError.message}\n    at Object.<anonymous>`
                }
            };
    
            const result = OutputFormatter.formatMissingData(customError);
    
            expect(result.exitCode).toEqual(expectedOutput.exitCode);
            expect(result.prompt.message).toContain(expectedOutput.prompt.message);
        });

    });

});