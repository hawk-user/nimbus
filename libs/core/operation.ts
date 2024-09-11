
import { GoneWrong } from './gone.wrong';
import { WentWell } from './went.well';

/**
    * Represents the result of an operation that can either succeed or fail.
    * 
    * @template L - The type of the value representing a failure.
    * @template R - The type of the value representing a success.
*/

export class Operation<L, R> {

    /**
        * Indicates whether the operation was successful or not.
    */

    public isSuccess: boolean;

    /**
        * Indicates whether the operation was fail or not.
    */

    public isFailure: boolean;

    /**
        * The outcome of the operation, which could either be a failure or success.
    */

    private outcome: GoneWrong<L> | WentWell<R>;

    /**
        * Creates an instance of `Operation` with the given success flag and outcome.
        * 
        * @param isSuccess - A flag indicating whether the operation was successful.
        * @param outcome - The result of the operation, either a failure or success.
    */

    public constructor(
        isSuccess: boolean,
        outcome: GoneWrong<L> | WentWell<R>
    ) {
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.outcome = outcome;
        Object.freeze(this);
    }

    /**
        * Raises an error with the specified message.
        * @param message - The error message to be thrown.
        * @throws Throws an error with the given message.
    */

    private raiseError(message: string): never {
        throw new Error(message);
    }

    /**
        * Retrieves the positive outcome of the operation if successful.
        * 
        * @returns The value of the successful outcome.
        * @throws Throws an error if the operation was not successful.
    */

    public positiveOutcome(): R {
        const message = 'Unable to get a positive outcome for a failure operation. Use \'negativeOutcome\' instead.';

        return this.outcome.isWentWell()
            ? this.outcome.getValue() 
            : this.raiseError(message);
    }

    /**
        * Retrieves the negative outcome of the operation if it failed.
        * 
        * @returns The value of the failure outcome.
        * @throws Throws an error if the operation was successful.
    */

    public negativeOutcome(): L {
        const message = 'Unable to get a negative outcome for a successful operation. Use \'positiveOutcome\' instead.';

        return this.outcome.isGoneWrong() 
            ? this.outcome.getValue() 
            : this.raiseError(message);
    }

    /**
        * Creates a successful `Operation` with the given success value.
        * 
        * @template T - The type of the success value.
        * @param success - The success value to be wrapped in an `Operation`.
        * @returns A successful `Operation` instance.
    */

    public static successful<T>(success: T): Operation<never, T> {
        return new Operation<never, T>(true, WentWell.create(success));
    }

    /**
        * Creates a failed `Operation` with the given failure value.
        * 
        * @template Q - The type of the failure value.
        * @param fail - The failure value to be wrapped in an `Operation`.
        * @returns A failed `Operation` instance.
    */

    public static failure<Q>(fail: Q): Operation<Q, never> {
        return new Operation<Q, never>(false, GoneWrong.create(fail));
    }

    /**
        * Merges multiple `Operation` instances into one.
        * If any operation fails, returns that operation.
        * 
        * @template K - The type of the failure value for the merged operation.
        * @template I - The type of the success value for the merged operation.
        * @param operations - The list of operations to be merged.
        * 
        * @returns An `Operation<K, never>` if the operations contain any failure,
        * otherwise an `Operation<never, I>` with the result of the first successful operation.
        * If the input array is empty, returns a `Operation<string, never>` indicating failure.
    */

    public static merge<K, I>(
        operations: (Operation<K, never> | Operation<never, I>)[]
    ): Operation<K, never> | Operation<never, I> | Operation<string, never> {

        const [ firstOperation ] = operations;
        const isOperationTableEmpty = !firstOperation;

        if (isOperationTableEmpty) {
            return Operation.failure('Unable to merge an empty operation table.');
        }

        for (const operation of operations) {
            if (operation.isFailure) return operation;
        }

        return Operation.successful(firstOperation.positiveOutcome())
    }

}