
import { StandardExitCodes } from '../../exit.codes';

/**
    * Represents the structure of formatted error output.
*/

export interface ErrorOutput<C extends StandardExitCodes> {

    /** 
        * The exit code associated with the error.
    */

    code: C;

    /**
        * The error message or stack trace.
    */

    error: string;

}

/**
    * An abstract class providing a utility method for formatting error outputs.
*/

export abstract class BaseError {

    /**
        * Formats an error message or stack trace into an `ErrorOutput` object.
        *
        * @param data - The error object or message to format.
        * @param code - The exit code associated with the error.
        * @returns The formatted error output.
    */

    protected static format<R extends StandardExitCodes>(
        data: Error | string,
        code: R
    ): ErrorOutput<R> {
        return typeof data === 'string'
            ? { error: `${data}\n`, code }
            : { error: `${data.stack ? data.stack : 'No stack property'}\n`, code };
    }

}