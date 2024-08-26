
import { StandardExitCodes } from '../constants';

/**
    * Interface representing the output of a program with a specific exit code.
    * 
    * @template C - The type of the exit code.
*/

export interface ProgramOutput<C extends StandardExitCodes> {

    /** 
        * The exit code of the program.
    */

    code: C;
    
    /** 
        * The output data as a string, typically a message or error stack trace.
    */

    data: string;

}

/**
    * Abstract class providing a base for formatting program output.
*/

export abstract class BaseOutput {

    /**
        * Formats the output data and associates it with a provided exit code.
        * 
        * @template R - The type of the exit code.
        * 
        * @param data - The data to be formatted, which can be either an Error object or a string.
        * @param code - The exit code associated with the output.
        * 
        * @returns A `ProgramOutput` object containing the formatted data and the associated exit code.
    */

    protected static format<R extends StandardExitCodes>(
        data: Error | string,
        code: R
    ): ProgramOutput<R> {
        return typeof data === 'string'
            ? { data: `${data}\n`, code }
            : { data: `${data.stack}\n`, code };
    }

}