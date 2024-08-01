
import { ConsoleLogger } from '@gherkineye/core';

describe('ConsoleLogger specifications', () => {

    var logger: ConsoleLogger;

    beforeEach(() => {
        logger = ConsoleLogger.create();
        console.info = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should log an informational message with a blue background sticker', () => {
        const message = 'This is an informational message';
        const sticker = '\u001B[44m info \u001B[0m ';

        logger.info(message);

        expect(console.info).toHaveBeenCalledWith(sticker, message);
    });
    
});