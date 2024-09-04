

import { BaseError } from './base.error';
import { ExitCodes, CommonErrorExitCodes } from '../../exit.codes';

/**
    * A class that provides specific methods for
    * formatting common errors.
*/

export class CommonError extends BaseError {

    /**
        * Formats an unspecified critical error into
        * a standardized object.
        *
        * @param error The error object to be formatted.
        * @returns The formatted error output with the unspecified critical error code.
    */

    public static unspecifiedError(error: Error) {
        return this.format<CommonErrorExitCodes>(
            error,
            ExitCodes.UNSPECIFIED_ERROR
        );
    }

    /**
        * Formats an internal error into a standardized object.
        *
        * @param error - The error object to be formatted.
        * @returns The formatted error output with the internal error code.
    */

    public static internalError(error: Error) {
        return this.format<CommonErrorExitCodes>(
            error,
            ExitCodes.INTERNAL_ERROR
        );
    }

}