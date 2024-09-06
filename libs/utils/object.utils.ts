/**
    * Utility class for object-related operations.
*/

export class ObjectUtils {

    /**
        * Checks if the specified property exists directly
        * on the given object.
        * 
        * @param target - The object to check for the property.
        * @param property - The name of the property to check.
        * 
        * @returns True if the property exists directly on the
        * object, otherwise false.
    */

    public static hasDirectProperty(
        target: object,
        property: string
    ): boolean {
        return Object.hasOwn(target, property);
    }

    /**
        * Converts a given object to its JSON string representation.
        *
        * @param target - The object to convert to a string.
        * @returns  The JSON string representation of the object.
    */

    public static toString(target: object): string {
        return JSON.stringify(target);
    }

}