
import { Logger } from './interfaces';

/**
    * A class that implements the `Logger` interface,
    * providing methods to log messages at different
    * levels (debug, info, warn, error, fatal) to the console.
*/

export class ConsoleLogger implements Logger {

    debug<T>(_data: T): void {}

    info(_message: string): void {}

    warn(_message: string): void {}

    error<T>(_message: string, _error: T): void {}

    fatal<T>(_message: string, _error: T): void {}

    /**
        * Creates an instance of `ConsoleLogger`.
        *
        * @returns A new instance of the `ConsoleLogger` class.
    */

    public static create(): ConsoleLogger {
        return new ConsoleLogger();
    }

}