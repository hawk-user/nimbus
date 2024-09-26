
/**
    * Interface representing an incoming port.
    * 
    * This port is responsible for managing data from an external source.
*/

export interface IncomingPort {

    /**
        * Reads data from the port and invokes the provided callback with the data.
        *
        * @param callback - A function that is called with the incoming data.
    */

    read: (callback: (data: Uint8Array) => void) => void;

}