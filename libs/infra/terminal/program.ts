
import { ReturnCode, StandardCodes } from './return.code';
import { StandardOutput, StandardInput } from './interfaces';

/**
    * Abstract class representing a program.
*/

export abstract class Program {

    /**
        * Executes the program logic.
        * @param stdin - The standard input object.
        * @param stdout - The standard output object.
        * @returns A promise that resolves when execution is complete.
    */

    protected abstract executeImpl(
        stdin: StandardInput,
        stdout: StandardOutput
    ): Promise<void>;

    /**
        * Executes the program and handles any errors that occur.
        * @param stdin - The standard input object.
        * @param stdout - The standard output object.
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
        * Outputs a message to the standard output with a given status code and data.
        * @param stdout - The standard output object.
        * @param stdcode - The status code to display.
        * @param msg - The message to display.
        * @param data - The data to display.
    */

    private output<T>(
        stdout: StandardOutput,
        stdcode: StandardCodes,
        msg: string,
        data: T
    ): void {
        stdout.display(stdcode, msg, data);
    }

    /**
        * Outputs a success message indicating the program ran smoothly.
        * @param stdout - The standard output object.
        * @param data - Optional data to include in the output.
    */

    protected ok<T>(
        stdout: StandardOutput,
        data?: T
    ): void {
        const msg = 'The program ran smoothly and successfully.';
        return this.output(stdout, ReturnCode.OK, msg, data);
    }
    
    /**
        * Outputs a message indicating partial understanding of the request.
        * @param stdout - The standard output object.
        * @param data - Optional data to include in the output.
    */

    protected idea<T>(
        stdout: StandardOutput,
        data?: T
    ): void {
        const msg = 'The program only partially understood what was being asked of it.';
        return this.output(stdout, ReturnCode.IDEA, msg, data);
    }

    /**
        * Outputs a message indicating that the requested resource could not be found.
        * @param stdout - The standard output object.
        * @param data - Optional data to include in the output.
    */

    protected notFound<T>(
        stdout: StandardOutput,
        data?: T
    ): void {
        const msg = 'The program was unable to find the requested resource.';
        return this.output(stdout, ReturnCode.NOT_FOUND, msg, data);
    }

    /**
        * Outputs a message indicating an unexpected condition occurred.
        * @param stdout - The standard output object.
        * @param data - Optional data to include in the output.
    */

    protected internal<T>(
        stdout: StandardOutput,
        data?: T
    ): void {
        const msg = 'The program encountered an unexpected condition.';
        return this.output(stdout, ReturnCode.INTERNAL, msg, data);
    }

}