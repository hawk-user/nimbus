
import { ErrorStream, IncomingStream, OutgoingStream } from './streams';
import { ProgramExitCodes } from './artifacts';


/**
    * Interface representing the execution context of a program.
    * This context includes streams for input, output, and error handling, 
    * as well as a method for exiting the program.
*/

export interface ExecutionContext {

    /**
        * The stream for receiving input data.
    */

    input: IncomingStream;

    /**
        * The stream for sending output data.
    */

    output: OutgoingStream;

    /**
        * The stream for handling error data.
    */

    error: ErrorStream;

    /**
        * Exits the program with the specified exit code.
        *
        * @param exitCode - The exit code for the program. 
        * If not provided, a default exit code may be used.
        * @returns This function does not return, as it will exit the program.
    */

    exit(exitCode?: ProgramExitCodes): never;

}