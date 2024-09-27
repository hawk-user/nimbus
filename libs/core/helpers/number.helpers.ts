
// Constants representing specific numeric values.
// These constants can be used throughout the application to improve readability
// and maintainability by providing meaningful names for these values.

/**
    * Represents the value zero.
*/

export const ZERO = 0;

/**
    * Represents the value one.
*/

export const ONE = 1;

/**
    * Represents the value two.
*/

export const TWO = 2;

/**
    * Represents the value three.
*/

export const THREE = 3;

/**
    * Represents the value nine.
*/

export const NINE = 9;

/**
    * Represents the value thirty-six.
*/

export const THIRTY_SIX = 36;

/**
    * Represents the value negative one.
*/

export const NEGATIVE_ONE = -1;

/**
    * Utility class for number-related operations.
*/

export class NumberHelpers {

    /**
        * Checks if a number is an integer.
        * @param num - The number to check.
        * @returns True if the number is an integer, false otherwise.
    */

    public static isInteger(num: number): boolean {
        return Number.isInteger(num);
    }

    /**
        * Checks if a number is positive.
        * @param num - The number to check.
        * @returns True if the number is positive, false otherwise.
    */

    public static isPositive(num: number): boolean {
        return num > ZERO;
    }

    /**
        * Checks if a number is a positive integer.
        * @param num - The number to check.
        * @returns True if the number is a positive integer, false otherwise.
    */

    public static isPositiveInteger(num: number): boolean {
        return this.isInteger(num) && this.isPositive(num);
    }

    /**
        * Checks if a number is not a positive integer.
        * @param num - The number to check.
        * @returns True if the number is not a positive integer, false otherwise.
    */

    public static isNotPositiveInteger(num: number): boolean {
        return !this.isPositiveInteger(num);
    }

}