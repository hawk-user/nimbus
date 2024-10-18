
import { OutgoingPort } from '../output';
import { StreamID } from '../stream.id';

/**
    * Type representing an error stream.
*/

export type ErrorStream = OutgoingPort & { 
    /**
        * The identifier for the error stream.
        * 
        * This identifier is used to categorize the stream as an error.
    */

    identifier: StreamID.ERROR; 

};