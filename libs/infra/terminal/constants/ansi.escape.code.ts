
/**
    * Enum representing ANSI escape codes for text formatting in terminal outputs.
    * 
    * This enum provides a set of constants for various ANSI escape codes used to
    * control text formatting, such as color and style, in terminal emulators.
*/

export enum AnsiEscapeCodes {

    /** Resets the text formatting to the default settings. */

    RESET = '\u001B[0m',

    /** Sets the background color to cyan. */

    BG_CYAN = '\u001B[36m',

    /** Sets the background color to yellow. */

    BG_YELLOW = '\u001B[33m',

    /** Sets the background color to red. */

    BG_RED = '\u001B[31m',

    /** Sets the background color to green. */

    BG_GREEN = '\u001B[32m',

    /** Sets the background color to grey. */

    BG_GREY = '\u001B[90m',

    /** Sets the background color to magenta. */

    BG_MAGENTA = '\u001B[45m'

}