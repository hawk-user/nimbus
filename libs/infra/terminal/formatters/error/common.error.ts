

import { BaseError } from './base.error';
import { ExitCodes, ErrorExitCodes } from '../../exit.codes';

/**
    * A class that provides specific methods for
    * formatting common errors.
*/

export class CommonError extends BaseError {

    /**
        * Formats an internal error into a standardized object.
        *
        * @param error - The error object to be formatted.
        * @returns The formatted error output with the internal error code.
    */

    public static internalError(error: Error) {
        return this.format<ErrorExitCodes>(
            error,
            ExitCodes.INTERNAL_ERROR
        );
    }

}