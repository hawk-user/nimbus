
import { StandardCodes } from '../return.code';

/**
    * Interface representing a standard output mechanism.
*/

export interface StandardOutput {

    /**
        * Sets the standard code for the output.
        * 
        * @param stdcode - The standard code to set. Should be one of the values from StandardCodes.
        * @returns The current instance for method chaining.
    */

    setCode(stdcode: StandardCodes): this;

    /**
        * Displays the provided data.
        * 
        * @param data - Optional data to display. Can be of any type.
    */

    display<T>(data?: T): void;

}