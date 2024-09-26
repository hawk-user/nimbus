
/**
    * Enum representing different types of stream identifiers.
    * 
    * These identifiers are used to categorize the direction or state of a data stream.
*/

export enum StreamID {

    /**
        * Identifier for incoming streams.
        * This identifier is used for streams that are received by the program.
    */

    INCOMING = '&incoming',

    /**
        * Identifier for outgoing streams.
        * This identifier is used for streams that are sent out by the program.
    */

    OUTGOING = '&outgoing',

    /**
        * Identifier for streams that encounter errors.
        * This identifier is used for streams that encounter errors during processing.
    */

    ERROR = '&error'
    
}