
/**
    * A type that represents either a `GoneWrong` instance with a type `L` or a `WentWell` instance with a type `R`.
    * 
    * @template L - The type of the value representing a failure contained in `GoneWrong`.
    * @template R - The type of the value representing a success contained in `WentWell`.
*/

export type Outcome<L, R> = GoneWrong<L> | WentWell<R>;


/**
    * Represents a successful outcome with a value.
    * 
    * @template T - The type of the value held by the `WentWell` instance.
*/

export class WentWell<T> {

    /**
        * The value representing the successful outcome.
    */

    private readonly value: T;

    /**
        * Creates an instance of `WentWell` with a given value.
        * 
        * @param value - The value to be held by this `WentWell` instance.
    */

    private constructor(value: T) {
        this.value = value;
        Object.freeze(this);
    }

    /**
        * Gets the value of the `WentWell` instance.
        * 
        * @returns The value held by this `WentWell` instance.
    */

    public getValue(): T {
        return this.value;
    }

    /**
        * Determines if the instance represents a successful outcome.
        * 
        * @returns Always returns `true` indicating this instance represents a successful outcome.
    */

    public isWentWell(): this is WentWell<T> {
        return true;
    }

    /**
        * Determines if the instance represents a failure.
        * 
        * @template N - The type of the value that would be held by a `GoneWrong` instance.
        * @returns Always returns `false` indicating this instance does not represent a failure.
    */

    public isGoneWrong<N>(): this is GoneWrong<N> {
        return false;
    }

    /**
        * Creates a new instance of `WentWell` with the specified value.
        * 
        * @template B - The type of the value to be held by the `WentWell` instance.
        * @param value - The value to be held by the new `WentWell` instance.
        * @returns A new instance of `WentWell` holding the specified value.
    */

    static create<B>(value: B): WentWell<B> {
        return new WentWell(value);
    }

}

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