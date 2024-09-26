
import { ONE, NEGATIVE_ONE } from './number.helpers';

/**
    * A function type used for filtering array items.
    * @param item - The item to test.
    * @returns True if the item matches the condition.
    * @template J - The type of item being tested.
*/

export type Predicate<J> = (item: J) => boolean;

/**
    * Utility class for common array operations.
*/

export class ArrayHelpers {

    /**
        * Checks if the provided index indicates that the item was not found.
        * @param index - The index to check.
        * @returns True if the index indicates the item was not found.
    */

    private static isNotFound(index: number): boolean {
        return index === NEGATIVE_ONE;
    }

    /**
        * Checks if the provided index indicates that the item was found.
        * @param index - The index to check.
        * @returns True if the index indicates the item was found.
    */

    private static isFound(index: number): boolean {
        return !this.isNotFound(index);
    }

    /**
        * Finds the first element in the array that matches the predicate.
        * @param array - The array to search within.
        * @param predicate - The predicate function used to find the element.
        * @returns The first element that matches the predicate, or undefined if no match is found.
        * @template T - The type of items in the array.
    */

    public static findByPredicate<T>(
        array: T[],
        predicate: Predicate<T>
    ): T | undefined {
        return array.find(predicate);
    }

    /**
        * Removes items at a specified index from the array.
        * @param array - The array from which to remove the item(s).
        * @param index - The index at which to start removal.
        * @param deleteCount - The number of items to remove. Defaults to 1 if not specified.
        * @template T - The type of items in the array.
    */

    public static removeAtIndex<T>(
        array: T[], 
        index: number,
        deleteCount: number = ONE
    ): void {
        array.splice(index, deleteCount);
    }

    /**
        * Removes the first item from the array that matches the predicate.
        * @param array - The array from which to remove the item.
        * @param predicate - The predicate function to test each item.
        * @returns True if an item was removed, false otherwise.
        * @template T - The type of items in the array.
    */

    public static removeByPredicate<T>(
        array: T[],
        predicate: Predicate<T>
    ): boolean {
        const index = array.findIndex(predicate);
        if (this.isFound(index)) {
            this.removeAtIndex(array, index);
            return true;
        }
        return false;
    }

    /**
        * Safely pushes an item to an array if the array is defined.
        *
        * @param array - The array to push the item into.
        * @param item - The item to push into the array.
    */

    public static safePush<T>(
        array: T[] | undefined,
        item: T
    ): void {
        array?.push(item);
    }

}