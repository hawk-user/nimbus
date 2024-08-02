
import { Logger } from './interfaces';
import { ANSI_ESCAPE_CODE } from './constants';

/**
    * A class that implements the `Logger` interface,
    * providing methods to log messages at different
    * levels (debug, info, warn, error, fatal) to the console.
*/

export class ConsoleLogger implements Logger {

    debug<T>(data: T) {
        const sticker =  `${ ANSI_ESCAPE_CODE.BG_CYAN } debug ${ ANSI_ESCAPE_CODE.RESET } `;
        console.info(sticker, data);
    }

    info(message: string): void {
        const sticker =  `${ ANSI_ESCAPE_CODE.BG_BLUE } info ${ ANSI_ESCAPE_CODE.RESET } `;
        console.info(sticker, message);
    }

    warn(message: string) {
        const sticker =  `${ ANSI_ESCAPE_CODE.BG_YELLOW } warn ${ ANSI_ESCAPE_CODE.RESET } `;
        console.warn(sticker, message);
    }

    error<T>(message: string, error: T) {
        return Object.create({ message, error });
    }

    fatal<T>(message: string, error: T) {
        return Object.create({ message, error });
    }

    /**
        * Creates an instance of `ConsoleLogger`.
        *
        * @returns A new instance of the `ConsoleLogger` class.
    */

    public static create(): ConsoleLogger {
        return new ConsoleLogger();
    }

}