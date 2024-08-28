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