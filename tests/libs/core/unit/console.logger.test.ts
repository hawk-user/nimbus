
import { ConsoleLogger } from '@gherkineye/core';

describe('ConsoleLogger specifications', () => {

    var logger: ConsoleLogger;

    beforeEach(() => {
        logger = ConsoleLogger.create();
        console.info = jest.fn();
        console.debug = jest.fn();
        console.warn = jest.fn();
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

    test('should log an debug messages with a cyan background sticker', () => {
        const message = 'This is an debug message';
        const sticker = '\u001B[46m debug \u001B[0m ';

        logger.debug(message);

        expect(console.info).toHaveBeenCalledWith(sticker, message);
    });

    test('should log an warning messages with a yellow background sticker', () => {
        const message = 'This is an warning message';
        const sticker = '\u001B[43m warn \u001B[0m ';

        logger.warn(message);

        expect(console.warn).toHaveBeenCalledWith(sticker, message);
    });
    
});