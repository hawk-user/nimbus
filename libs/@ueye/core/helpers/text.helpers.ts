
import { TWO, NINE, THIRTY_SIX } from './number.helpers';

/**
    * Utility class for text-related operations.
*/

export class TextHelpers {

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
        * Generates a unique string identifier.
        * 
        * **Note:**
        * 
        * This method uses a basic algorithm and should be used only
        * in small systems where the likelihood of collisions is low.
        * For larger systems or critical applications, consider using
        * a more robust identifier generation method.
        * 
        * @returns A unique identifier.
    */
    
    public static generateUniqueId(): string {
        const timestamp = Date.now().toString(THIRTY_SIX);
        const randomPart = Math.random().toString(THIRTY_SIX).substring(TWO, NINE);
        return timestamp + randomPart;
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
        * Checks if a given text string is not empty.
        *
        * @param text - The text to check.
        * @returns  Returns true if the text is not empty, otherwise false.
    */

    public static isNotEmpty(text: string): boolean {
        return !this.isEmpty(text);
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

    /**
        * Removes leading and trailing whitespace from a string and adds a trailing space.
        *
        * @param text - The string to process.
        * @returns The processed string with no leading/trailing whitespace and an added trailing space.
    */

    public static trimAndAddTrailingSpace(text: string): string {
        return `${this.stripWhitespace(text)} `;
    }

}