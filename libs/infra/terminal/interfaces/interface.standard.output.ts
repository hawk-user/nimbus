
import { StandardCodes } from '../return.code';

/**
    * Interface representing a standard output mechanism.
*/

export interface StandardOutput {

    /**
        * Displays the provided data.
        * 
        * @param stdcode - The standard code to set. Should be one of the values from StandardCodes.
        * 
        * @param msg - The message to display.
        * 
        * @param data - Optional data to display.
    */

    display<T>(
        stdcode: StandardCodes,
        msg: string,
        data?: T
    ): void;

}