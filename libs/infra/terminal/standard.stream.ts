
import { 
    StandardInput,
    StandardError,
    StandardOutput,
    StreamIdentifier
} from './stream.contracts';

import { 
    CommonError,
    BaseOutput 
} from './formatters';

import { 
    CommonErrorExitCodes,
    ExitCodes,
    StandardExitCodes,
    SuccessExitCodes
} from './exit.codes';

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
                this.ExitWithUnspecifiedError(stderr, error);
            } else {
                this.ExitWithUnspecifiedError(stderr);
            }
            
        }
    }

    /**
        * Exits the current process with the specified standard code.
        * 
        * @param stdcode - The standard exit code used to terminate the process. 
        * 
        * @returns void
    */

    private exit(
        stream: StandardOutput | StandardError,
        stdcode: StandardExitCodes
    ): void {
        if (stdcode < ExitCodes.MIN || stdcode >  ExitCodes.MAX ) {
            const limitReached = `Invalid exit code: ${stdcode}. Exit code must be between 0 and 255.`;
            const err = new Error(limitReached);

            if (stream.identifier === StreamIdentifier.OUTPUT) {
                this.ExitWithInternalError(stream.fallback, err)
            } else {
                this.ExitWithInternalError(stream, err);
            }
        }

        process.exit(stdcode);
    }

    /**
        * Closes the output stream with a 'Done!' message or provided data
        * and exits with the DONE exit code.
        *
        * @param stdout - The output stream to write to.
        * @param data - Optional data to format and write. If not provided, defaults to 'Done!'.
    */

    protected ExitWithDone<R>(
        stdout: StandardOutput,
        data?: R
    ): void {
        const msg = 'Done!';
        const output = BaseOutput.done(data ? data : msg);
        this.promptWithExit(stdout, output.content, output.code);
    }

   /**
        * Closes the stream and writes an internal error message to it.
        *
        * @param stderr - The standard error stream to which the error
        * message will be written.
        * @param error - Optional error object to include in the message.
        * If not provided, a default internal error message is used.
    */

    protected ExitWithInternalError(
        stderr: StandardError,
        error?: Error
    ): void {
        const msg = 'An internal error occurred. Please check the logs for more details.';
        const output = CommonError.internalError(error ? error : new Error(msg));
        this.prompErrorWithExit(stderr, output.error, output.code);
    }

    /**
        * Closes the stream and writes an unspecified error message to it.
        *
        * @param stderr - The standard error stream to which the error
        * message will be written.
        * @param error - Optional error object to include in the message.
        * If not provided, a default unspecified error message is used.
    */

    protected ExitWithUnspecifiedError(
        stderr: StandardError,
        error?: Error
    ): void {
        const msg = 'An unspecified error occurred. Please try again later.';
        const output = CommonError.unspecifiedError(error ? error : new Error(msg));
        this.prompErrorWithExit(stderr, output.error, output.code);
    }

    /**
        * Displays a prompt message to the user via the standard output.
        *
        * @param stdout - The standard output stream where the message will be written.
        * @param msg - The prompt message to display to the user.
    */

    protected prompt(
        stdout: StandardOutput,
        msg: string
    ) {
        stdout.write(msg);
    }

    /**
        * Displays a prompt message to the user via the standard output and exits with a success code.
        *
        * @param stdout - The standard output stream where the message will be written.
        * @param msg - The prompt message to display to the user.
        * @param code - The exit code that will be used when exiting.
    */

    protected promptWithExit(
        stdout: StandardOutput,
        msg: string,
        code: SuccessExitCodes
    ) {
        stdout.write(msg, () => this.exit(stdout, code));
    }

    /**
        * Displays an error message to the user via the standard error output and exits with an error code.
        *
        * @param stderr - The standard error stream where the error message will be written.
        * @param errmsg - The error message to display to the user.
        * @param code - The error exit code that will be used when exiting.
    */

    protected prompErrorWithExit(
        stderr: StandardError,
        errmsg: string,
        code: CommonErrorExitCodes
    ) {
        stderr.write(errmsg, () => this.exit(stderr, code));
    }

}