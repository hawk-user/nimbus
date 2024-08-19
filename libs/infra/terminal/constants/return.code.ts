
// Use of constants to avoid the ESlint no-magic-number
// error and maintain enumeration consistency

const SUCCESSFUL = 0;
const HINT = 1;
const NOT_FOUND = 4;
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
        * Unable to find.
        * 
        * The program was unable to find the resource.
    */

     UNABLE_TO_FIND = NOT_FOUND,

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

/**
    * Represents the possible values of the error codes returned by the program.
*/

export type StandardErrorCodes = Exclude<StandardCodes, ReturnCode.OK>;

/**
    * Represents the possible values of the success codes returned by the program.
*/

export type StandardSuccessCodes = Extract<StandardCodes, ReturnCode.OK>;