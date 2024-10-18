
import { OutgoingPort } from './interface.outgoing.port';
import { StreamID } from '../stream.id';

/**
    * Type representing an outgoing stream.
*/

export type OutgoingStream = OutgoingPort & { 

    /**
        * The identifier for the outgoing stream.
        * 
        * This identifier is used to categorize the stream as outgoing.
    */

    identifier: StreamID.OUTGOING; 

};