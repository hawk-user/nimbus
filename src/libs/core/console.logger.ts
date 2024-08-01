
import { Logger } from './interfaces';

/**
    * A class that implements the `Logger` interface,
    * providing methods to log messages at different
    * levels (debug, info, warn, error, fatal) to the console.
*/

export class ConsoleLogger implements Logger {

    debug<T>(data: T) {
        return data
    }

    info(message: string) {
        return message
    }

    warn(message: string) {
        return message;
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