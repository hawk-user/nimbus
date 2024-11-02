
import { OutputFormatter } from '@ueye/infra/terminal';
import assert from 'node:assert';

describe('Output specifications', () => {

    describe('formatPrompt', () => {

        it('should correctly format a string', () => {
            const data = 'Test message';
            const prompt = { message: 'Test message\n' };
            const expected = (OutputFormatter as any).formatPrompt(data);
            assert.deepStrictEqual(prompt, expected)
        });

        it('should correctly format an object', () => {
            const data = { key: 'value' };
            const prompt = { message: '{"key":"value"}\n' };
            const expected = (OutputFormatter as any).formatPrompt(data);
            assert.deepStrictEqual(prompt, expected)
        });

    });

    describe('formatError', () => {

        it('should format Error object correctly', () => {
            const error = new Error('Test error');
            const prompt = { message: `${error.stack}\n` };
            const expected = (OutputFormatter as any).formatError(error);
            assert.deepStrictEqual(prompt, expected);
        });

        it('should format string error correctly', () => {
            const error = 'Test error';
            const prompt = { message: 'Test error\n' };
            const expected = (OutputFormatter as any).formatError(error);
            assert.deepStrictEqual(prompt, expected);
        });

        it('should handle undefined error', () => {
            const prompt = { message: 'No stack property\n' };
            const expected = (OutputFormatter as any).formatError(undefined);
            assert.deepStrictEqual(prompt, expected);
        });

    });

    describe('formatDone', () => {

        it('should format done message with default data', () => {
            const prompt = { message: 'Done!\n' };
            const exitCode = 0;
            const output = OutputFormatter.formatDone();
            assert.deepStrictEqual(output, { prompt, exitCode });
        });

        it('should format done message with provided data', () => {
            const data = 'Completed!';
            const prompt = { message: 'Completed!\n' };
            const exitCode = 0;
            const output = OutputFormatter.formatDone(data);
            assert.deepStrictEqual(output, { prompt, exitCode });
        });

    });

    describe('formatUnspecifiedError', () => {

        it('should format unspecified error with default message', () => {
            const prompt = { message: 'An unspecified error occurred. No error case matched!\n' };
            const exitCode = 255;
            const output = OutputFormatter.formatUnspecifiedError();
            assert.deepStrictEqual(output, { prompt, exitCode });
        });

        it('should format unspecified error with provided error', () => {
            const error = new Error('Test unspecified error');
            const  prompt = { message: `${error.stack}\n` };
            const exitCode = 255;
            const output = OutputFormatter.formatUnspecifiedError(error);
            assert.deepStrictEqual(output, { prompt, exitCode });
        });

    });

    describe('formatSpecifiedError', () => {

        it('should format specified error correctly', () => {
            const error = new Error('Test specified error');
            const prompt = { message: `${error.stack}\n` };
            const exitCode = 200;
            const output = OutputFormatter.formatSpecifiedError(error, 200 as any);
            assert.deepStrictEqual(output, { prompt, exitCode });
        });

    });

});