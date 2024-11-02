
import { ObjectHelpers } from '@ueye/core';
import { ErrorExitCodes } from '../../artifacts';
import { Prompt } from './interface.prompt';
import { ProgramOutput } from './interface.program.ouput';
import * as exitCodes from '../../constants/exit.codes';

/**
    * Representing the output data.
*/

export type OutputData = string | object;

/**
    * Utility class for formatting program output and error messages.
*/

export class OutputFormatter {

    /**
        * Formats the provided data into a prompt message.
        *
        * @param data - The data to be formatted into a prompt message.
        * @returns A `Prompt` object containing the formatted message.
    */

    private static formatPrompt(data: OutputData): Prompt {
        return { message: `${typeof data === 'object' && data ? ObjectHelpers.toString(data) : data}\n` };
    }

    /**
        * Formats the provided error into a prompt message.
        *
        * @param error - The error to be formatted into a prompt message.
        * @returns A `Prompt` object containing the formatted error message.
    */

    private static formatError(error: unknown): Prompt {
        return { message: `${error instanceof Error ? error.stack : error || 'No stack property'}\n` };
    }

    /**
        * Formats the provided data into a program output indicating a successful operation.
        *
        * @param data - (Optional) The data to be included in the output. Defaults to 'Done!'.
        * @returns A `ProgramOutput` object containing the formatted prompt and a success exit code.
    */

    public static formatDone(data?: OutputData): ProgramOutput {
        const prompt = this.formatPrompt(data ? data : 'Done!');
        return { prompt, exitCode: exitCodes.DONE };
    }

    /**
        * Formats the provided error into a program output indicating an unspecified error.
        *
        * @param error - (Optional) The error to be included in the output. Defaults to
        * 'An unspecified error occurred. No error case matched!'.
        * @returns A `ProgramOutput` object containing the formatted error message
        * and an unspecified error exit code.
    */

    public static formatUnspecifiedError(error?: unknown): ProgramOutput {
        const unspecifiedError = 'An unspecified error occurred. No error case matched!';
        return {
            prompt: this.formatError(error ? error : unspecifiedError),
            exitCode: exitCodes.UNSPECIFIED_ERROR
        };
    }

    /**
        * Formats the provided error into a program output indicating a specified error.
        *
        * @param error - The error to be included in the output.
        * @param exitCode - The specific error exit code to be used.
        * @returns A `ProgramOutput` object containing the formatted error message
        * and the specified error exit code.
    */

    public static formatSpecifiedError(
        error: Error,
        exitCode: ErrorExitCodes
    ): ProgramOutput {
        return { prompt: this.formatError(error), exitCode };
    }

}