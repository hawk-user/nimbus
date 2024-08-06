
/**
    * Representation of the different codes returned by the program.
*/

export enum ReturnCode {

    /**
        * Ok.
        * 
        * The program has run successfully.
    */

    OK = 0,

    /**
        * Idea.
        * 
        * The program gives an idea of what might be needed.
    */

    IDEA = 1,

     /**
        * Not Found.
        * 
        * The program was unable to find the resource.
    */

    NOT_FOUND = 4,

    /**
        * Internal.
        * 
        * The program encountered an unexpected condition that prevented it from meeting demand.
    */

    INTERNAL = 5,

}

/**
    * Represents the possible values of the various codes returned by the program.
*/

export type StandardCodes = typeof ReturnCode[keyof typeof ReturnCode];