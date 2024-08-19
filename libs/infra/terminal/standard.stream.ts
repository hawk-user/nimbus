
import { 
    ReturnCode,
    StandardErrorCodes,
    StandardSuccessCodes
} from './return.code';

import { 
    StandardInput,
    StandardError,
    StandardOutput
} from './interfaces.stream';

/**
    * Abstract class that defines standard streams,
    * serving as pre-established input and output
    * communication pathways between a software
    * application and its surrounding environment.
*/

export abstract class StandardStream {

    /**
        * Executes the core business logic.
        * @param stdin - The standard input stream used to receive input data.
        * @param stdout - The standard output stream used to write messages or data.
        * @param stderr - The standard error stream used to output error messages or diagnostics.
        * @returns A promise that resolves upon the completion of execution.
    */

    protected abstract executeImpl(
        stdin: StandardInput,
        stdout: StandardOutput,
        stderr: StandardError
    ): Promise<void>;


    /**
        * Executes the core business logic implementation.
        * @param stdin - The standard input stream used to receive input data.
        * @param stdout - The standard output stream used to write messages or data.
        * @param stderr - The standard error stream used to output error messages or diagnostics.
        * @returns A promise that resolves upon the completion of execution.
    */

    public async execute(
        stdin: StandardInput,
        stdout: StandardOutput,
        stderr: StandardError
    ): Promise<void> {
        try {
            await this.executeImpl(stdin, stdout, stderr);
        } catch (error: unknown) {
            if (error instanceof Error) {
                this.internal(stderr, error.message)
            } else {
                this.internal<undefined>(stderr);
            }
            
        }
    }

    /**
        * Outputs error messages or diagnostics.
        * @param stderr - The standard error stream used to output error messages or diagnostics.
        * @param errcode - The error code to be displayed.
        * @param msg - The error message to be displayed.
        * @param error - Additional error information or diagnostics to be displayed.
    */

    private outputError<T>(
        _stderr: StandardError,
        _errcode: StandardErrorCodes,
        _msg: string,
        _error: T
    ): void {
        // Choose to leave the formatting skill here or not?
    }

    /**
        * Outputs success and additional data.
        * 
        * @param stdout - The standard output stream used to output data.
        * @param successcode - The success code to be displayed.
        * @param msg - The success message to be displayed.
        * @param data - Additional data to be displayed.
    */


    private output<T>(
        _stdout: StandardOutput,
        _successcode: StandardSuccessCodes,
        _msg: string,
        _data: T
    ): void {
        // Choose to leave the formatting skill here or not?
    }

    /**
        * Outputs a success message indicating that the program ran successfully.
        * 
        * @param stdout - The standard output stream used to output the success and optional data.
        * @param data - Optional additional data to be included in the output.
    */

    protected ok<T>(
        stdout: StandardOutput,
        data?: T
    ): void {
        const msg = 'The program ran smoothly and successfully.';
        return this.output(stdout, ReturnCode.OK, msg, data);
    }

    /**
        * Outputs a message indicating an unexpected condition occurred.
        * 
        * @param stderr - The standard error stream used to output error messages or diagnostics.
        * @param error - Error to display.
    */

    protected internal<T>(
        stderr: StandardError,
        error?: T
    ): void {
        const msg = 'The program encountered an unexpected condition.';
        return this.outputError(stderr, ReturnCode.INTERNAL, msg, error);
    }

    /**
        * Outputs a message indicating that it has not been possible
        * to fully complete the intended action.
        * 
        * @param stderr - The standard error stream used to output error messages or diagnostics.
        * @param hint - Hint to display.
    */

    protected idea<T>(
        stderr: StandardError,
        hint?: T
    ): void {
        const msg = 'The program understood the intended action but was unable to fully complete it.';
        return this.outputError(stderr, ReturnCode.IDEA, msg, hint);
    }

    /**
        * Outputs a message indicating that it has not been possible
        * to fully complete the intended action due to missing information or ressources.
        * 
        * @param stderr - The standard error stream used to output error messages or diagnostics.
        * @param cause - Cause to display.
    */

    protected unableToFind<T>(
        stderr: StandardError,
        cause?: T
    ): void {
        const msg = 'The program understood the intended action but was unable to proceed due to missing information or ressources.';
        return this.outputError(stderr, ReturnCode.UNABLE_TO_FIND, msg, cause);
    }

}