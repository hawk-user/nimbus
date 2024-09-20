
/**
    * Class for type-safe casting and assertions.
*/

export class TypeGuard {

    /**
        * Safely casts a value to a specified type if a condition is met.
        *
        * @param value - The value to cast.
        * @param itsTheRightTypeOf - The condition to check before casting.
        * This should be a function that takes a value and returns a boolean
        * indicating if the value is of the desired type.
        * @param wrongTypeError - The error message to throw if
        * the condition is not met.
        * @returns The value cast to the specified type.
        * @throws Will throw an error if the condition is not met.
    */

    public static safeCast<R>(
        value: unknown,
        itsTheRightTypeOf: (val: unknown) => boolean,
        wrongTypeError: string
    ): R {
        if (itsTheRightTypeOf(value)) return value as R;
        else throw new Error(wrongTypeError);
    }

}