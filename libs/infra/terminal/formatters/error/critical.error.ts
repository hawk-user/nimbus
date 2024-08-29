
import { BaseError } from './base.error';
import { ExitCodes, CriticalExitCodes } from '../../exit.codes';

/**
    * A class that provides methods for formatting
    * critical errors.
*/

export class CriticalError extends BaseError {

    /**
        * Formats an unspecified critical error into
        * a standardized object.
        *
        * @param error The error object to be formatted.
        * @returns The formatted error output with the unspecified critical error code.
    */

    public static unspecifiedError(error: Error) {
        return this.format<CriticalExitCodes>(
            error,
            ExitCodes.UNSPECIFIED_ERROR
        );
    }

}