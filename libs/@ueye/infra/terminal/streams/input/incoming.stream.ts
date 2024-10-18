
import { IncomingPort } from './interface.incoming.port';
import { StreamID } from '../stream.id';

/**
    * Type representing an incoming stream.
*/

export type IncomingStream = IncomingPort & { 

    /**
        * The identifier for the incoming stream.
        * 
        * This identifier is used to categorize the stream as incoming.
    */
   
    identifier: StreamID.INCOMING;

};