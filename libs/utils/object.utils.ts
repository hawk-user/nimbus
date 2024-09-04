/**
    * Utility class for object-related operations.
*/

export class ObjectUtils {

    /**
        * Converts a given object to its JSON string representation.
        *
        * @param value - The object to convert to a string.
        * @returns  The JSON string representation of the object.
    */

    public static toString(value: object): string {
        return JSON.stringify(value);
    }

}