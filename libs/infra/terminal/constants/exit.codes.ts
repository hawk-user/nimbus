
// Use of constants to avoid the ESlint no-magic-number
// error and maintain enumeration consistency

// Success code(s)
const OK = 0;

// Information code(s)
const NOTIMP = 1;

// Warning code(s)
const INVINP = 40;
const GFGERR = 41;
const UNSOP = 42;

// Error code(s)
const FILNF = 80;
const PERDEN = 81;
const CONERR = 82;
const TIOUT = 83;
const DEPEER = 84;
const DATCOR = 85;
const AUTHFL = 86;
const AUTHZFL = 87;
const INTERR = 88;

// Debug code(s)
const RESLOC = 120;
const VERMIS = 121;
const NETERR = 122;
const PROROERR = 123;

// Critical code(s)
const UNSPEC = 160;
const RESEXT = 161;

// Custom code(s)
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
        * Feature not implemented.
    */

    FEATURE_NOT_IMPLEMENTED = NOTIMP,

    /**
        * Invalid input provided.
    */

    INVALID_INPUT = INVINP,

    /**
        * Configuration error encountered.
    */

    CONFIGURATION_ERROR = GFGERR,

    /**
        * Unsupported operation requested.
    */

    UNSUPPORTED_OPERATION = UNSOP,

    /**
        * File not found.
    */

    FILE_NOT_FOUND = FILNF,

    /**
        * Permission denied.
    */

    PERMISSION_DENIED = PERDEN,

    /**
        * Connection error occurred.
    */

    CONNECTION_ERROR = CONERR,

    /**
        * Operation timed out.
    */

    TIMEOUT = TIOUT,

    /**
        * Dependency error encountered.
    */

    DEPENDENCY_ERROR = DEPEER,

    /**
        * Data corruption detected.
    */

    DATA_CORRUPTION = DATCOR,

    /**
        * Authentication failed.
    */

    AUTHENTICATION_FAILED = AUTHFL,

    /**
        * Authorization failed.
    */

    AUTHORIZATION_FAILED = AUTHZFL,

    /**
        * Internal error occurred.
    */

    INTERNAL_ERROR = INTERR,

    /**
        * Resource is locked.
    */

    RESSOURE_LOCKED = RESLOC,

    /**
        * Version mismatch detected.
    */

    VERSION_MISMATCH = VERMIS,

    /**
        * Network error occurred.
    */

    NETWORK_ERROR = NETERR,

    /**
        * Protocol error detected.
    */

    PROTOCOL_ERROR = PROROERR,

    /**
        * Unspecified error occurred.
    */

    UNSPECIFIED_ERROR = UNSPEC,

    /**
        * Resource exhausted.
    */

    RESSOURCE_EXHAUSTED = RESEXT,

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
    * Type representing any standard exit code.
*/

export type StandardExitCodes = typeof ExitCodes[keyof typeof ExitCodes];

/**
    * Type representing successful exit codes.
*/

export type SuccessExitCodes = ExitCodes.DONE;

/**
    * Type representing informational exit codes.
*/

export type InformationalExitCodes = ExitCodes.FEATURE_NOT_IMPLEMENTED;

/**
    * Type representing warning exit codes.
*/

export type WarningExitCodes = ExitCodes.INVALID_INPUT
| ExitCodes.CONFIGURATION_ERROR
| ExitCodes.UNSUPPORTED_OPERATION;

/**
    * Type representing error exit codes.
*/

export type ErrorExitCodes = ExitCodes.FILE_NOT_FOUND
| ExitCodes.PERMISSION_DENIED
| ExitCodes.CONNECTION_ERROR
| ExitCodes.TIMEOUT
| ExitCodes.DEPENDENCY_ERROR
| ExitCodes.DATA_CORRUPTION
| ExitCodes.AUTHENTICATION_FAILED
| ExitCodes.AUTHORIZATION_FAILED
| ExitCodes.INTERNAL_ERROR;

/**
    * Type representing debug exit codes.
*/

export type DebugExitCodes = ExitCodes.RESSOURE_LOCKED
| ExitCodes.VERSION_MISMATCH
| ExitCodes.NETWORK_ERROR
| ExitCodes.PROTOCOL_ERROR;

/**
    * Type representing critical exit codes.
*/

export type CriticalExitCodes = ExitCodes.UNSPECIFIED_ERROR
| ExitCodes.RESSOURCE_EXHAUSTED;

/**
    * Type representing custom exit codes.
*/

export type CustomExitCodes = ExitCodes.BLACKHOLE_REACHED;