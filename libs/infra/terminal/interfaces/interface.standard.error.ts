
import { StandardErrorCodes } from '../return.code';

/**
    * Interface representing a standard error ouput mechanism.
*/

export interface StandardError {

    /**
        * Displays the error.
        * 
        * @param errcode - The standard error code to set.
        * 
        * @param msg - The error message to display.
        * 
        * @param error - Optional error to display.
    */

    displayError<T>(
        errcode: StandardErrorCodes,
        msg: string,
        error?: T
    ): void;

}