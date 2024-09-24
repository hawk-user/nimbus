
/**
    * Constant to represent the number one.
*/

export const ONE = 1;

/**
    * A utility class for number-related operations.
*/

export class NumberHelpers {

    /**
        * Checks if a number is greater than one.
         *
         * @param num - The number to check.
        * @returns True if the number is greater than one, false otherwise.
    */

    public static isGreaterThanOne(num: number): boolean {
        return num > ONE;
    }

    /**
        * Subtracts a number from another number.
        *
        * @param num - The number to subtract from.
        * @param toSubtract - The number to subtract.
        * @returns The result of the subtraction.
    */

    public static minus(num: number, toSubtract: number): number {
        return num - toSubtract;
    }

    /**
        * Subtracts one from the given number.
        *
        * @param num - The number to subtract one from.
        * @returns The result of the subtraction.
    */
   
    public static minusOne(num: number): number {
        return this.minus(num, ONE);
    }

}