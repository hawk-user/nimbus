
// Use of constants to avoid the ESlint no-magic-number error
// and maintain enumeration consistency.

// Success code(s)
const OK = 0;

// Common error code(s)
const INTERR = 88;
const UNSPEC = 160;
const BLKHLED = 255;

/**
    * Enumeration of exit codes.
    * 
    * This enum defines a set of standard exit codes used within an application
    * to indicate the result of operations. It includes a success code, 
    * a set of common error codes, and also defines the minimum and maximum 
    * bounds for these codes.
*/

export enum ExitCodes {

    /**
        * Operation completed successfully.
    */

    DONE = OK,

    /**
        * Internal error occurred.
    */

    INTERNAL_ERROR = INTERR,

    /**
        * Unspecified error occurred.
    */

    UNSPECIFIED_ERROR = UNSPEC,

    /**
        * Blackhole reached (custom exit code).
        * This is a specific error code representing a non-standard or 
        * rare condition encountered in the application.
    */

    BLACKHOLE_REACHED = BLKHLED,

    /**
        * Minimum exit code value (same as DONE).
    */

    MIN = OK,

    /**
        * Maximum exit code value (same as BLACKHOLE_REACHED).
    */

    MAX = BLKHLED

}

/**
    * Type representing successful exit codes.
    * 
    * This type is used to represent any exit code that signifies a successful
    * operation.
 */

export type SuccessExitCodes = ExitCodes.DONE;

/**
    * Type representing common error exit codes.
    * 
    * This type is used to represent a union of exit codes that indicate various
    * error conditions. It includes:
    * - `ExitCodes.INTERNAL_ERROR`: An internal error.
    * - `ExitCodes.UNSPECIFIED_ERROR`: An unspecified error.
    * - `ExitCodes.BLACKHOLE_REACHED`: A custom error indicating that a blackhole was reached.
*/

export type CommonErrorExitCodes = ExitCodes.INTERNAL_ERROR
    | ExitCodes.UNSPECIFIED_ERROR
    | ExitCodes.BLACKHOLE_REACHED;

/**
    * Type representing any standard exit codes.
    * 
    * This type is a union of all possible exit codes that an application
    * might return, covering both success and error conditions.
*/

export type StandardExitCodes = SuccessExitCodes | CommonErrorExitCodes;