
/**
    * Utility class for text-related operations.
*/

export class TextUtils {

    /**
        * Compares two strings and returns true if they are exactly the same.
        *
        * @param original - The original string to compare.
        * @param comparison - The string to compare with the original.
        * @returns Returns true if the strings are the same, otherwise false.
    */

        public static areIdentical(
            original: string,
            comparison: string
        ): boolean {
            return original === comparison;
        }

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