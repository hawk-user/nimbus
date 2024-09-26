
import { TypeGuard } from '@ueye/core';
import * as exitCodes from '../constants/exit.codes'

/**
    * Representing success exit codes.
*/

export type SuccessExitCodes = typeof exitCodes.DONE;

/**
    * Representing specified error exit codes.
*/

export type SpecifiedErrorExitCodes = typeof exitCodes.MAX_ATTEMPTS_REACHED;

/**
    * Representing all possible error exit codes.
*/

export type ErrorExitCodes = SpecifiedErrorExitCodes | typeof exitCodes.UNSPECIFIED_ERROR;

/**
    * Representing all program exit codes.
*/

export type ProgramExitCodes = SuccessExitCodes | ErrorExitCodes;

/**
    * Class for managing exit codes.
*/

export class ExitCode {

    /**
        * Minimum valid exit code
    */

    private static MIN: number = exitCodes.DONE;

    /**
        * Maximum valid exit code.
    */

    private static MAX: number = exitCodes.UNSPECIFIED_ERROR;

    /**
        * Checks if the provided exit code is valid.
        * @param exitCode - The exit code to validate.
        * @returns True if the exit code is within the valid range; otherwise, false.
    */

    private static isValid(exitCode: number): boolean {
        return exitCode >= this.MIN && exitCode <= this.MAX;
    }

    /**
        * Creates a ProgramExitCode, validating the provided code.
        * @param code - The exit code to create.
        * @returns A valid ProgramExitCodes type.
        * @throws Error if the exit code is invalid.
    */

    public static create(code: number): ProgramExitCodes {
        const limit = `Invalid exit code: ${code}. Exit code must be between ${this.MIN} and ${this.MAX}.`;
        return TypeGuard.safeCast<ProgramExitCodes>(code, () => this.isValid(code), limit);
    }

}