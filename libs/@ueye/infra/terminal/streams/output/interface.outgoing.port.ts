
/**
    * Interface representing an outgoing port.
    * 
    * This port is responsible for managing data to an external destination.
*/

export interface OutgoingPort {

    /**
        * Writes data to the port.
        *
        * @param data - The data to be written to the port.
        * @returns Returns true if the data was written successfully, otherwise false.
    */

    write(data: string): boolean;

}