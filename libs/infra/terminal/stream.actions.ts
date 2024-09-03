
/**
    * Interface representing the action resolvers for stream actions.
*/

export interface StreamActionResolvers {

    /**
        * Called when the action completes successfully.
        * @param value - The value to resolve with.
    */

    onSuccess: (value: string) => void;

    /**
        * Called when the action encounters an error.
        * @template H - The type of the reason for the error.
        * @param reason - The reason for the error.
    */

    onError: <H>(reason?: H) => void;

}

/**
    * A class containing static methods for stream actions.
*/

export class StreamActions {

    /**
        * Converts a Buffer to a clean UTF-8 string.
        * @param data - The buffer data to be cleaned and converted.
        * @param action - The resolvers to call on success or error.
    */

    public static toCleanString(
        data: Buffer,
        action: StreamActionResolvers
    ): void { 
        try {
            const cleanString = data.toString('utf8').trim();
            action.onSuccess(cleanString);
        } catch (error) {         
            action.onError(error);
        }
    }
}