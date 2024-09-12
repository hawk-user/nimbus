
import { WentWell } from './went.well';

/**
    * Represents a failed outcome with a value.
    * 
    * @template T - The type of the value held by the `GoneWrong` instance.
*/

export class GoneWrong<T> {

    /**
        * The value representing the failed outcome.
    */

    private readonly value: T;

    /**
        * Creates an instance of `GoneWrong` with a given value.
        * 
        * @param value - The value to be held by this `GoneWrong` instance.
    */

    private constructor(value: T) {
        this.value = value;
        Object.freeze(this);
    }

    /**
        * Gets the value of the `GoneWrong` instance.
        * 
        * @returns The value held by this `GoneWrong` instance.
    */

    public getValue(): T {
        return this.value;
    }

    /**
        * Determines if the instance represents a failure.
        * 
        * @returns Always returns `true` indicating this instance represents a failure.
    */

    public isGoneWrong(): this is GoneWrong<T> {
        return true;
    }

    /**
        * Determines if the instance represents a successful outcome.
        * 
        * @template N - The type of the value that would be held by a `WentWell` instance.
        * @returns Always returns `false` indicating this instance does not represent a successful outcome.
    */

    public isWentWell<N>(): this is WentWell<N> {
        return false;
    }

    /**
        * Creates a new instance of `GoneWrong` with the specified value.
        * 
        * @template B - The type of the value to be held by the `GoneWrong` instance.
        * @param value - The value to be held by the new `GoneWrong` instance.
        * @returns A new instance of `GoneWrong` holding the specified value.
    */

    static create<B>(value: B): GoneWrong<B> {
        return new GoneWrong(value);
    }

}