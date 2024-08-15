
import { Positive } from './positive';

/**
    * Represents a negative value.
*/

export class Negative<T> {

    /**
        * The negative value.
    */

    private readonly value: T;

    /**
        * Creates an instance of Negative with the given value.
        * @param value - The value to be marked as negative.
    */

    private constructor(value: T) {
        this.value = value;
        Object.freeze(this);
    }

    /**
        * Returns the negative value.
        * @returns The negative value.
    */

    public getValue(): T {
        return this.value;
    }

    /**
        * Checks if this instance represents a negative value.
        * @returns Always returns true.
    */

    public isNegative(): this is Negative<T> {
        return true;
    }

    /**
        * Checks if this instance represents a positive value.
        * @returns Always returns false.
    */

    public isPositive<P>(): this is Positive<P> {
        return false;
    }

    /**
        * Creates an instance of Negative with the given value.
        * @param value - The value to be marked as negative.
        * @returns A new instance of Negative.
    */

    public static create<B>(value: B): Negative<B> {
        return new Negative(value);
    }

}