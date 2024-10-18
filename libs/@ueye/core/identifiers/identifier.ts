
import { TextHelpers } from '../helpers';

/**
    * Abstract class representing an Identifier.
    * 
    * ***Note:***
    * 
    * This class serves as a blueprint for creating specific
    * types of identifiers.
    * 
    * It encapsulates the concept of an identifier with a string
    * value and provides methods for working with that value.
    * Subclasses should extend this class to implement specific
    * types of identifiers.
*/

export abstract class Identifier {

    /**
        * The identifier value.
    */

    private value: string;

    /**
        * Creates an instance of Identifier.
        * 
        * @param {string} value - The identifier value.
    */

    constructor(value: string) {
        this.value = value;
    }

    /**
        * Returns the identifier value.
        * @returns The identifier value.
    */

    public toValue(): string {
        return this.value;
    }

    /**
        * Compares this identifier to another identifier.
        * 
        * @param id - The identifier to compare with.
        * @returns True if the identifiers are equal, otherwise false.
    */

    public isEqualTo(id: Identifier): boolean {
        const isSameClass = id instanceof this.constructor;
        const haveSameValue = TextHelpers.areIdentical(this.value, id.toValue());
        return isSameClass && haveSameValue;
    }

}