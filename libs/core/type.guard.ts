
/**
    * Class for type-safe casting and assertions.
*/

export class TypeGuard {

    /**
        * Safely casts a value to a specified type if a condition is met.
        *
        * @param value - The value to cast.
        * @param condition - The condition to check before casting.
        * @param errmsg - The error message to throw if the condition is not met.
        * @returns The value cast to the specified type.
        * @throws Will throw an error if the condition is not met.
    */
   
    public static safeCast<T>(
        value: unknown,
        condition: () => boolean,
        errmsg: string
    ): T {
        if (condition()) {
            return value as T;
        } else {
            throw new Error(errmsg);
        }
    }

}