
/**
    * A type combining the properties of `NodeJS.Process['stdout']`
    * with a fallback stream property `fallback`.
    * 
    * @purpose
    *   Provides a mechanism to define a primary output stream 
    *   with an alternative stream to be used as a fallback.
*/

export type FallbackStream = NodeJS.Process['stdout'] & {

    /**
        * The fallback stream, typically used when the primary 
        * output stream is unavailable or fails.
        * 
        * @caution
        *   **✋ Read this:** The `fallback` stream should be reserved 
        *   for use only if the primary `stdout` stream is not accessible 
        *   or encounters an error.
    */

    fallback: NodeJS.Process['stderr'];

};


/**
    * Type representing the standard output stream (`stdout`) 
    * with an fallback mechanism in case of errors.
*/

export type StandardOutput = NodeJS.Process['stdout'] & FallbackStream;

/**
    * Type representing a standard error ouput mechanism.
*/

export type StandardError = NodeJS.Process['stderr'];

/**
    * Type representing a standard input mechanism.
*/

export type StandardInput = NodeJS.Process['stdin'];