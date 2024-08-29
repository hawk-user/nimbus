
import { BaseOutput as ImportedBaseOutput } from '@ueye/infra/terminal';

class BaseOutput extends ImportedBaseOutput {

    public static testFormat<T>(
        data: T,
        code: number
    ) {
        return this.format(data, code);
    }
    
}

describe('BaseOutput specifications', () => {

    const code = 0;

    describe('format', () => {

        it('should format an object correctly', () => {
            const obj = { key: 'value' };

            const result = BaseOutput.testFormat(obj, code);
            expect(result).toEqual({ content: `${JSON.stringify(obj)}\n`, code });
        });

        it('should format an array correctly', () => {
            const arr = [0, 'hop', true];

            const result = BaseOutput.testFormat(arr, code);
            expect(result).toEqual({ content: `${JSON.stringify(arr)}\n`, code });
        });

        it('should format a string correctly', () => {
            const str = 'message';

            const result = BaseOutput.testFormat(str, code);
            expect(result).toEqual({ content: `${str}\n`, code });
        });

        it('should format a number correctly', () => {
            const num = 12345;

            const result = BaseOutput.testFormat(num, code);
            expect(result).toEqual({ content: `${num}\n`, code });
        });

        it('should format a boolean correctly', () => {
            const resultFalse = BaseOutput.testFormat(false, code);
            expect(resultFalse).toEqual({ content: `false\n`, code });

            const resultTrue = BaseOutput.testFormat(true, code);
            expect(resultTrue).toEqual({ content: `true\n`, code });
        });

        it('should handle null and undefined correctly', () => {
            const resultNull = BaseOutput.testFormat(null, code);
            expect(resultNull).toEqual({ content: 'null\n', code });

            const resultUndefined = BaseOutput.testFormat(undefined, code);
            expect(resultUndefined).toEqual({ content: 'undefined\n', code });
        });

    })
    
    describe('done', () => {

        it('should format data as a success output with DONE exit code', () => {
            const data = { key: 'value' };

            const result = BaseOutput.done(data);
            expect(result).toEqual({ content: `${JSON.stringify(data)}\n`, code });
        });

        it('should format string data as a success output with DONE exit code', () => {
            const msg = 'message';

            const result = BaseOutput.done(msg);
            expect(result).toEqual({ content: `${msg}\n`, code });
        });

    });

});
