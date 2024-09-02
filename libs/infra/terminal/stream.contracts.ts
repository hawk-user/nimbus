
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
    * Type representing a stream event type.
*/

export type StreamEvent = 'data';


/**
    * A type representing a listener function for stream events.
    * @template K - The type of the arguments passed to the listener function.
*/

export type StreamEventListener<K> = (...args: K[]) => void;

/**
    * Interface representing an input stream.
    * @template Y - The type of value returned when registering an event listener.
*/

export interface InputStream<Y = unknown> {

    /**
        * Registers an event listener for a specific event type.
        * @param event - The event type to listen for.
        * @param listener - The function to call when the event is emitted.
        * @returns A value of type `Y` representing the result of registering the listener.
    */

    on<L>(event: StreamEvent, listener: StreamEventListener<L>): Y;

}

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

export type StandardInput = InputStream
    & { identifier: StreamIdentifier.INPUT };

/**
    * Represents input and output streams.
*/

export interface IOStream  {

    /**
        * The standard input stream.
    */

    stdin: StandardInput,

    /**
        * The standard output stream.
    */

    stdout: StandardOutput

}