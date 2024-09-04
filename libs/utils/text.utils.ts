
/**
    * Utility class for text-related operations.
*/

export class TextUtils {

    /**
        * Checks if a given text string is empty.
        *
        * @param text - The text to check.
        * @returns  Returns true if the text is empty, otherwise false.
    */

    public static isEmpty(text: string): boolean {
        return text === '';
    }

    /**
        * Removes leading and trailing whitespace from a string.
        *
        * @param text - The string to strip whitespace from.
        * @returns The string with leading and trailing whitespace removed.
    */

    public static stripWhitespace(text: string): string {
        return text.trim();
    }

}