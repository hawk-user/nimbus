
import { Identifier } from './identifier';
import { TextUtils } from '@ueye/utils';

/**
    * Represents a unique identifier.
    * 
    * Note:
    * 
    * This class extends `Identifier` to provide a concrete
    * implementation for unique identifiers. 
    * 
    * It can create identifiers from a given string or generate
    * new ones using a basic algorithm.
*/

export class UniqueIdentifier extends Identifier {

    /**
        * Creates an instance of UniqueIdentifier.
        * 
        * @param id - Optional identifier string. If not provided,
        * a new identifier is generated.
        * 
        * @private
    */

    private constructor(id?: string) {
        super(id ? id : TextUtils.generateUniqueId());
    }

    /**
        * Creates a new UniqueIdentifier instance.
        * 
        * @param id - Optional identifier string. If not provided,
        * a new identifier is generated.
        * 
        * @returns A new UniqueIdentifier instance.
    */
   
    public static create(id?: string): UniqueIdentifier {
        return new UniqueIdentifier(id);
    }

}