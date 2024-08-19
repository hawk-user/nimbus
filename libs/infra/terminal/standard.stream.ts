
import { 
    StandardInput,
    StandardError,
    StandardOutput
} from './interfaces.stream';

import { 
    StandardCodes,
    ReturnCode
} from './constants';

import { OutputFormatter } from './output.formatter';

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
                this.internal(stderr, error);
            } else {
                this.internal(stderr);
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

    private exit(stdcode: StandardCodes): void {
        process.exit(stdcode);
    }

    /**
        * Outputs a success message indicating that the program ran successfully.
        * 
        * @template T - The type of data.
        * 
        * @param stdout - The standard output stream used to output the success and optional data.
        * @param data - Optional additional data to be included in the output.
    */

    protected ok<T>(
        stdout: StandardOutput,
        data?: T
    ): void {
        const msg = 'The program ran smoothly and successfully.';
        stdout.write(
            OutputFormatter.ok(data ? data : msg),
            () => this.exit(ReturnCode.OK)
        );
    }

    /**
        * Outputs a message indicating an unexpected condition occurred.
        * 
        * @param stderr - The standard error stream used to output error messages or diagnostics.
        * @param error - Error to display.
    */

    protected internal(
        stderr: StandardError,
        error?: Error
    ): void {
        const msg = 'The program encountered an unexpected condition.';
        stderr.write(
            OutputFormatter.internal(error ? error : msg),
            () => this.exit(ReturnCode.INTERNAL)
        );
    }

    /**
        * Outputs a message indicating that it has not been possible
        * to fully complete the intended action.
        * 
        * @param stderr - The standard error stream used to output error messages or diagnostics.
        * @param hint - Hint to display.
    */

    protected idea(
        stderr: StandardError,
        hint: string
    ): void {
        const msg = 'The program understood the intended action but was unable to fully complete it.';
        stderr.write(
            OutputFormatter.idea(hint ? hint : msg),
            () => this.exit(ReturnCode.IDEA)
        );
    }

    /**
        * Outputs a message indicating that it has not been possible
        * to fully complete the intended action due to missing information or ressources.
        * 
        * @param stderr - The standard error stream used to output error messages or diagnostics.
        * @param cause - Cause to display.
    */

    protected unableToFind(
        stderr: StandardError,
        cause: Error
    ): void {
        const msg = 'The program understood the intended action but was unable to proceed due to missing information or ressources.';
        stderr.write(
            OutputFormatter.unableToFind(cause ? cause : msg),
            () => this.exit(ReturnCode.UNABLE_TO_FIND)
        );
    }

}