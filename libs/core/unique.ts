
import { Properties } from './properties';
import { UniqueIdentifier } from './unique.identifier';

/**
    * Abstract class representing an object with a unique
    * identifier and a defined structure.
    * 
    * It provides methods to check the uniqueness of instances
    * and to compare instances based on their unique identifiers.
    * 
    * @template B - The type of the structure that this class manages.
    * 
    * @abstract
*/

export abstract class Unique<B> extends Properties<B> {

    /**
        * The unique identifier associated with this instance.
        * 
        * @protected
        * @readonly
    */

    protected readonly uniqueIdentifier: UniqueIdentifier;

    /**
        * Creates an instance of `Unique` with the specified structure
        * and an optional unique identifier.
        * 
        * If no identifier is provided, a new unique identifier is generated.
        * 
        * @param structure - The structure defining the properties of this instance.
        * @param uniqueIdentifier - An optional unique identifier.* If not provided,
        * a new one is created.
    */

    constructor(
        structure: B,
        uniqueIdentifier?: UniqueIdentifier
    ) {
        super(structure);
        
        if (uniqueIdentifier) {
            this.uniqueIdentifier = uniqueIdentifier;
        } else {
            this.uniqueIdentifier = UniqueIdentifier.create();
        }
    }

    /**
        * Checks if the given object is an instance of `Unique`.
        * 
        * @template S - The type of the object being checked.
        * @param comparison - The object to check.
        * @returns True if the object is an instance of `Unique`, otherwise false.
    */

    public static isUnique<S>(comparison: S): boolean {
        return comparison instanceof Unique;
    }

    /**
        * Compares this `Unique` instance to another `Unique` instance
        * to determine if they are equal.
        * 
        * @param comparison - The `Unique` instance to compare against.
        * @returns True if the instances are equal, otherwise false.
    */

    public isEqualTo(comparison: Unique<B>): boolean {
        return Unique.isUnique(comparison)
            && this.uniqueIdentifier.isEqualTo(comparison.uniqueIdentifier);
    }

}