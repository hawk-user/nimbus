
import { 
    StandardInput,
    StandardError,
    StandardOutput
} from './stream.contracts';

import { StreamIdentifier } from './stream.identifiers';
import { CriticalError, CommonError } from './formatters';
import { ExitCodes, StandardExitCodes } from './exit.codes';

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
                this.CloseWithUnspecifiedError(stderr, error);
            } else {
                this.CloseWithUnspecifiedError(stderr);
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
            stream.identifier === StreamIdentifier.OUTPUT
                ? this.closeWithInternalError(stream.fallback, err)
                : this.closeWithInternalError(stream, err);
        
        }
        process.exit(stdcode);
    }

   /**
        * Closes the stream and writes an internal error message to it.
        *
        * @param stderr - The standard error stream to which the error
        * message will be written.
        * @param error - Optional error object to include in the message.
        * If not provided, a default internal error message is used.
    */

    protected closeWithInternalError(
        stderr: StandardError,
        error?: Error
    ): void {
        const msg = 'An internal error occurred. Please check the logs for more details.';
        const output = CommonError.internalError(error ? error : new Error(msg));
        stderr.write(
            output.error,
            () => this.exit(stderr, output.code)
        );
    }

    /**
        * Closes the stream and writes an unspecified error message to it.
        *
        * @param stderr - The standard error stream to which the error
        * message will be written.
        * @param error - Optional error object to include in the message.
        * If not provided, a default unspecified error message is used.
    */

    protected CloseWithUnspecifiedError(
        stderr: StandardError,
        error?: Error
    ): void {
        const msg = 'An unspecified error occurred. Please try again later.';
        const output = CriticalError.unspecifiedError(error ? error : new Error(msg));
        stderr.write(
            output.error,
            () => this.exit(stderr, output.code)
        );
    }

}