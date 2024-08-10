
import { 
    ReturnCode,
    // StandardCodes,
    StandardErrorCodes
} from './return.code';

import { 
    StandardOutput,
    StandardInput,
    StandardError
} from './interfaces';

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
        stderr: StandardError,
        errcode: StandardErrorCodes,
        msg: string,
        error: T
    ): void {
        stderr.displayError(errcode, msg, error);
    }

    // [wip] 👀 Chained pipelines!?
    // Under consideration...

    // private output<T>(
    //     stdout: StandardOutput,
    //     stdcode: StandardCodes,
    //     msg: string,
    //     data: T
    // ): void {
    //     stdout.display(stdcode, msg, data);
    // }


    // protected ok<T>(
    //     stdout: StandardOutput,
    //     data?: T
    // ): void {
    //     const msg = 'The program ran smoothly and successfully.';
    //     return this.output(stdout, ReturnCode.OK, msg, data);
    // }

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