
import { TextHelpers, BufferHelpers } from '@ueye/core';
import { OutputFormatter, OutputData, ProgramOutput } from './streams';
import { ExecutionContext } from './interface.execution.context';
import { ErrorExitCodes, ExitCode } from './artifacts';

/**
    * Abstract class used to control program execution.
    * @abstract
*/

export abstract class ExecutionController {
    
    /**
        * Executes the implementation specific to the derived class.
        * @param context - The execution context.
        * @returns A promise that resolves when execution is complete.
        * @abstract
    */

    protected abstract executeImpl(context: ExecutionContext): Promise<void>;

    /**
        * Runs the execution controller with the given context.
        * @param context - The execution context.
        * @returns A promise that resolves when the execution is finished.
    */

    public async run(context: ExecutionContext): Promise<void> {
        try {
            await this.executeImpl(context);
        } catch (error: unknown) {
            this.handleUnspecifiedError(context, error);
        }
    }

    /**
        * Exits the context with a specific exit code.
        * @param context - The execution context.
        * @param code - The exit code.
        * @private
    */

    private exit(context: ExecutionContext, code: number): void {
        context.exit(ExitCode.create(code));
    }

    /**
        * Prompts the user with a message.
        * @param context - The execution context.
        * @param message - The message to display.
    */

    protected prompt(context: ExecutionContext, message: string): void {
        context.output.write(`${message}\n`);
    }

    /**
        * Prompts for input and returns a boolean indicating success.
        * @param context - The execution context.
        * @param message - The message to display.
        * @returns True if input was successfully written, false otherwise.
        * @private
    */

    private promptForInput(context: ExecutionContext, message: string): boolean {
        return context.output.write(TextHelpers.trimAndAddTrailingSpace(message));
    }

    /**
        * Prompts the user and exits with the specified output.
        * @param {ExecutionContext} context - The execution context.
        * @param {ProgramOutput} output - The output data to display.
        * @private
    */

    private promptAndExit(context: ExecutionContext, output: ProgramOutput): void {
        const { prompt, exitCode } = output;
        this.prompt(context, `\n${prompt.message}`);
        this.exit(context, exitCode);
    }

    /**
        * Reads input from the execution context.
        * @param context - The execution context.
        * @returns A promise that resolves to the trimmed input string.
        * @private
    */

    private readInput(context: ExecutionContext): Promise<string> {
        return new Promise<string>((resolve) => {
            context.input.read((data: Uint8Array) => {
                resolve(BufferHelpers.toUTF8StringTrimmed(data));
            });
        });
    }

    /**
        * Handles unspecified errors and exits with a formatted error message.
        * @param context - The execution context.
        * @param error - The error to handle.
    */

    protected handleUnspecifiedError(context: ExecutionContext, error?: unknown): void {
        this.promptAndExit(context, OutputFormatter.formatUnspecifiedError(error));
    }

    /**
        * Handles specified errors and exits with a formatted error message and exit code.
        * @param context - The execution context.
        * @param error - The error to handle.
        * @param exitCode - The exit code to return.
    */

    protected handleSpecifiedError(context: ExecutionContext, error: Error, exitCode: ErrorExitCodes): void {
        this.promptAndExit(context, OutputFormatter.formatSpecifiedError(error, exitCode));
    }

    /**
        * Exits with a completion message and optional output data.
        * @param context - The execution context.
        * @param data - Optional output data.
    */

    protected done(context: ExecutionContext, data?: OutputData): void {
        this.promptAndExit(context, OutputFormatter.formatDone(data));
    }

    /**
        * Captures input from the user with a header message.
        * @param context - The execution context.
        * @param header - The header message for input capture.
        * @returns A promise that resolves to the user's input.
    */

    protected async captureInput(context: ExecutionContext, header: string) {
        this.promptForInput(context, header);
        return this.readInput(context);
    }

}