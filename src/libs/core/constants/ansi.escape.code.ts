

/**
    * Enum representing ANSI escape codes for text formatting in the terminal.
    * @readonly
*/

export enum ANSI_ESCAPE_CODE {

    /**
        * Resets all formatting to default.
    */

    RESET = '\u001B[0m',

    /**
        * Sets the background color to blue.
    */

    BG_BLUE = '\u001B[44m',

    /**
        * Sets the background color to cyan.
    */

    BG_CYAN = '\u001B[46m',

    /**
        * Sets the background color to yellow.
    */

    BG_YELLOW = '\u001B[43m',

    /**
        * Sets the background color to orange.
    */

    BG_ORANGE = '\u001B[48;5;214m'

}