
/**
    * Interface for a logging utility.
    * 
    * This interface defines methods for logging messages 
    * at various levels of severity.
*/

export interface Logger {

    /**
        * Logs a debug-level message.
        * @template T
        * @param data - The data to log. This can be any
        * type of object or value.
    */

    debug<T>(data: T): void;

    /**
        * Logs an informational message.
        * @param message - The message to log.
    */

    info(message: string): void;
    
    /**
        * Logs a warning message.
        * @param message - The warning message to log.
    */

    warn(message: string): void;

    /**
        * Logs an error message with an associated error object.
        * @template T
        * @param message - The error message to log.
        * @param error - The error object to log. This is typically
        * an instance of Error or a similar object.
    */

    error<T>(message: string, error: T): void;

    /**
        * Logs a fatal message with an associated error object.
        * @template T
        * @param message - The fatal message to log.
        * @param error - The error object to log. This could be
        * an instance of Error or a similar object.
    */

    fatal<T>(message: string, error: T): void;

}