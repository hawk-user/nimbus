
// Use of constants to avoid the ESlint no-magic-number
// error and maintain enumeration consistency

const FD_STDOUT = 1;
const FD_STDERR = 2;
const FD_STDIN = 0;

/**
    *  File descriptors for standard stream. 
*/

export enum FileDescriptors {

    /**
        * File descriptor for standard output (`stdout`).
        * 
        * Represents the file descriptor number used for standard output 
        * streams.
    */

    STDOUT = FD_STDOUT,

    /**
        * File descriptor for standard error (`stderr`).
        * 
        * Represents the file descriptor number used for standard error 
        * streams.
    */

    STDERR = FD_STDERR,

    /**
        * File descriptor for standard input (`stdin`).
        * 
        * Represents the file descriptor number used for standard input 
        * streams.
    */

    STDIN = FD_STDIN

}

/**
    * Type representing the file descriptor numbers.
*/

export type FileDescriptorNumbers = typeof FileDescriptors[keyof typeof FileDescriptors];