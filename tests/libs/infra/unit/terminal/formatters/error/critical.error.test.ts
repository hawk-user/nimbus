
import { CriticalError } from '@ueye/infra/terminal';

describe('CriticalError specifications', () => {

    it('should format an unspecified error correctly with 160 code', () => {
        const error = new Error('Error message');
        const result = CriticalError.unspecifiedError(error);

        expect(result).toEqual({
            error: `${error.stack}\n`,
            code: 160,
        });
    });

});