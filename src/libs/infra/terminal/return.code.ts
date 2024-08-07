
// Program codes

const SUCCESSFUL = 0;
const HINT = 1;
const UNABLE_TO_FIND = 4;
const FATAL = 5;

/**
    * Representation of the different codes returned by the program.
*/

export enum ReturnCode {

    /**
        * Ok.
        * 
        * The program has run successfully.
    */

    OK = SUCCESSFUL,

    /**
        * Idea.
        * 
        * The program gives an idea of what might be needed.
    */

    IDEA = HINT,

     /**
        * Not Found.
        * 
        * The program was unable to find the resource.
    */

    NOT_FOUND = UNABLE_TO_FIND,

    /**
        * Internal.
        * 
        * The program encountered an unexpected condition that prevented it from meeting demand.
    */

    INTERNAL = FATAL

}

/**
    * Represents the possible values of the various codes returned by the program.
*/

export type StandardCodes = typeof ReturnCode[keyof typeof ReturnCode];