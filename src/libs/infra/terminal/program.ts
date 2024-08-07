
import { ReturnCode, StandardCodes } from './return.code';
import { StandardOutput, StandardInput } from './interfaces';

/**
    * Abstract base class for a program.
    * 
    * Provides methods to execute the program, handle output, and manage errors.
*/

export abstract class Program {

    /**
        * Abstract method to be implemented by subclasses.
        * 
        * Executes the core logic of the program.
        * 
        * @param stdin - The standard input for the program.
        * @param stdout - The standard output for the program.
        * @returns A promise that resolves when execution is complete.
    */

    protected abstract executeImpl(
        stdin: StandardInput,
        stdout: StandardOutput
    ): Promise<void>;

    /**
        * Executes the program and handles errors.
        * 
        * Calls the `executeImpl` method and catches any uncontrolled
        * errors that occur during execution.
        * 
        * @param stdin - The standard input for the program.
        * @param stdout - The standard output for the program.
        * @returns A promise that resolves when execution is complete.
    */

    public async execute(
        stdin: StandardInput,
        stdout: StandardOutput
    ): Promise<void> {
        try {
            await this.executeImpl(stdin, stdout);
        } catch (error: unknown) {
            if(error instanceof Error) {
                this.internal(stdout, error.message)
            } else {
                this.internal<undefined>(stdout);
            }
            
        }
    }

    /**
        * Outputs data to the standard output with a specified return code.
        * 
        * Sets the return code on the `stdout` and displays the `data`.
        * 
        * @param stdout - The standard output for the program.
        * @param stdcode - The return code to set.
        * @param data - The data to display.
    */

    public static output<T>(
        stdout: StandardOutput,
        stdcode: StandardCodes,
        data: T
    ): void {
        stdout.setCode(stdcode).display(data);
    }

    /**
        * Handles internal errors by outputting an error message or data.
        * 
        * Outputs an internal error message with the `INTERNAL` return code.
        * 
        * @param stdout - The standard output for the program.
        * @param data - Optional data to display. If not provided, a default message is shown.
     */

    public internal<T>(
        stdout: StandardOutput,
        data?: T
    ): void {
        const msg = 'The program encountered an unexpected condition.';
        return Program.output(stdout, ReturnCode.INTERNAL, data ?? msg);
    }

}