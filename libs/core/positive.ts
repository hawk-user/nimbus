
import { Negative } from './negative';

/**
    * Represents a positive value.
*/

export class Positive<T> {

    /**
        * The positive value.
    */

    private readonly value: T;

    /**
        * Creates an instance of Positive with the given value.
        * @param value - The value to be marked as positive.
    */

    private constructor(value: T) {
        this.value = value;
        Object.freeze(this);
    }

    /**
        * Returns the positive value.
        * @returns The positive value.
    */

    public getValue(): T {
        return this.value;
    }

    /**
        * Checks if this instance represents a negative value.
        * @returns Always returns false.
    */

    public isNegative<N>(): this is Negative<N> {
        return false;
    }

    /**
        * Checks if this instance represents a positive value.
        * @returns Always returns true.
    */

    public isPositive(): this is Positive<T> {
        return true;
    }

    /**
        * Creates an instance of Positive with the given value.
        * @param value - The value to be marked as positive.
        * @returns A new instance of Positive.
    */

    static create<B>(value: B): Positive<B> {
        return new Positive(value);
    }

}