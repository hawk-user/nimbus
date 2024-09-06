
/**
    * Represents the structure of an object where each
    * property key is mapped to its corresponding type.
    * 
    * @template K - The type of the object whose structure is being defined.
    * 
    * **Note:**
    * 
    * This type alias is a direct mapping from the
    * properties and types of an object. 
    * 
    * It ensures that every key in the object is associated
    * with its corresponding type, maintaining type consistency.
*/

type Structure<T> = { [K in keyof T]: T[K] };

/**
    * Abstract class representing a set of properties.
    * 
    * This class encapsulates a structure, which is a mapping
    * of property keys to their types. 
    * 
    * It provides a constructor to initialize this structure
    * and stores it in a protected member.
    * 
    * @template T - The type of the properties being managed by this class.
*/

export abstract class Properties<T> {

    /**
        * The structure of the properties, mapping each property key to its type.
        * 
        * @protected
    */

    protected readonly structure: Structure<T>;

    /**
        * Creates an instance of Properties with the specified structure.
        * 
        * @param structure - The structure defining the properties and their types.
    */

    constructor(structure: Structure<T>) {
        this.structure = structure;
    }

}