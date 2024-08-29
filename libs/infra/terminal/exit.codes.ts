
// Use of constants to avoid the ESlint no-magic-number
// error and maintain enumeration consistency

// Success code(s)
const OK = 0;

// Common error code(s)
const INTERR = 88;

// Critical error code(s)
const UNSPEC = 160;

// Custom error code(s)
const BLKHLED = 255;

/**
    * Enumeration of exit codes.
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
*/

export type SuccessExitCodes = ExitCodes.DONE;

/**
    * Type representing error exit codes.
*/

export type ErrorExitCodes = ExitCodes.INTERNAL_ERROR;

/**
    * Type representing critical exit codes.
*/

export type CriticalExitCodes = ExitCodes.UNSPECIFIED_ERROR;

/**
    * Type representing custom exit codes.
*/

export type CustomExitCodes = ExitCodes.BLACKHOLE_REACHED;

/**
    * Type representing any standard exit code.
*/

export type StandardExitCodes = SuccessExitCodes
| ErrorExitCodes
| CriticalExitCodes
| CustomExitCodes;