
import { StreamIdentifier } from './stream.identifiers';

/**
    * Interface representing an output stream that can write data.
*/

export interface OutputStream {

    /**
        * Writes data to the stream.
        *
        * @param buffer - The data to be written.
        * @param callback - Optional callback parameter will be executed when the data is finally written out.
        * @returns Returns `true` if the write operation was successful, otherwise `false`.
    */

    write(buffer: Uint8Array | string, callback?: (error?: Error) => void): boolean;

}

/**
    * Interface representing an input stream.
*/

export interface IntputStream {}

/**
    * Type representing a standard error stream.
*/

export type StandardError = OutputStream
    & { identifier: StreamIdentifier.ERROR };

/**
    * Type representing a standard output stream.
    * 
    * **Caution:** The `fallback` property should be used only
    * if the error stream is not accessible and no other solution
    * is available. Misuse of this property can lead to unintended
    * behavior or error handling issues.
*/

export type StandardOutput = OutputStream
    & { identifier: StreamIdentifier.OUTPUT }
    & { fallback: StandardError };

/**
    * Type representing a standard input stream.
*/

export type StandardInput = IntputStream
    & { identifier: StreamIdentifier.INPUT };