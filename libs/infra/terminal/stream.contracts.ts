
/**
    * Interface representing an output stream.
*/

export interface OutputStream {

    /**
        * Writes data to the stream.
        *
        * @param buffer - The data to be written.
        * @param callback - Optional callback parameter will be executed when the
        * data is finally written out.
        * @returns Returns `true` if the write operation was successful, otherwise `false`.
    */

    write(buffer: Uint8Array | string, callback?: (error?: Error) => void): boolean;

}

/**
    * Type representing a function that handles stream events.
    * @template K - Type of the event arguments, which can be either Buffer or string.
    * @param args - Event arguments of type K.
*/

export type StreamEventListener<K extends Buffer | string> = (...args: K[]) => void;

/**
    * Defines methods for handling stream events.
*/

export interface StreamEvents {

    /**
        * Registers a listener for data events.
        * @template L - Type of the data that the listener will handle, which can be either Buffer or string.
        * @param listener - A function to call when data events occur.
    */

    onData<L extends Buffer | string>(listener: StreamEventListener<L>): void;

}

/**
    * Interface representing an input stream.
*/

export interface InputStream {

    /**
        * Provides access to the event handling methods for this stream.
    */

    events: StreamEvents;

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
    * @template O - The type of value returned when registering
    * an event listener.
*/

export type StandardInput = InputStream
    & { identifier: StreamIdentifier.INPUT };

/**
    * Represents input and output streams.
    * @template A - The type of value returned when registering
    * an event listener for the input stream.
*/

export interface IOStream {

    /**
        * The standard input stream.
    */

    stdin: StandardInput,

    /**
        * The standard output stream.
    */

    stdout: StandardOutput

}

/**
    * Enum representing identifiers for different types of streams.
    *
    * - `OUTPUT`: Represents the output stream, associated with `&out`.
    * - `ERROR`: Represents the error stream, associated with `&err`.
    * - `INPUT`: Represents the input stream, associated with `&in`.
*/

export enum StreamIdentifier {
    OUTPUT = '&out',
    ERROR = '&err',
    INPUT = '&in'
}

/**
    * Type representing a unique stream identifier.
    *
    * Possible values:
    * - `&out` (Standard ouput)
    * - `&err` (Standard error)
    * - `&in` (Standard innput)
*/

export type UniqueStreamIdentifier = typeof StreamIdentifier[keyof typeof StreamIdentifier];


/**
    * Interface representing the action resolver for stream actions.
*/

export interface StreamActionResolver {

    /**
        * Called when the action completes successfully.
        * @param value - The value to resolve with.
    */

    onSuccess: (value: string) => void;

    /**
        * Called when the action encounters an error.
        * @template H - The type of the reason for the error.
        * @param reason - The reason for the error.
    */

    onError: <H>(reason?: H) => void;

}