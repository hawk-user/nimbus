
import { GoneWrong, WentWell, Outcome } from './outcome';
import { TypeGuard } from '../type';

/**
    * Represents the result of an operation that can
    * either succeed or fail.
    * 
    * @template L - The type of the value representing a failure.
    * @template R - The type of the value representing a success.
*/

export class Operation<L, R> {

    /**
        * The outcome of the operation, which could either be
        * a failure or success.
    */

    private outcome: Outcome<L, R>;

    /**
        * Creates an instance of `Operation` with the given outcome.
        * 
        * @param outcome - The result of the operation, either
        * a failure or success.
    */

    public constructor(outcome: Outcome<L, R>) {
        this.outcome = outcome;
        Object.freeze(this);
    }

    /**
        * Retrieves the positive outcome of the operation if successful.
        * 
        * @returns The value of the successful outcome.
        * @throws Throws an error if the operation was not successful.
    */

    public positiveOutcome(): R {
        return TypeGuard.safeCast<R>(
            this.outcome.getValue(),
            this.outcome.isWentWell,
            OPERATION_ERROR.NEGATIVE_OUTCOME
        );
    }

    /**
        * Retrieves the negative outcome of the operation if it failed.
        * 
        * @returns The value of the failure outcome.
        * @throws Throws an error if the operation was successful.
    */

    public negativeOutcome(): L {
        return TypeGuard.safeCast<L>(
            this.outcome.getValue(),
            this.outcome.isGoneWrong,
            OPERATION_ERROR.POSITIVE_OUTCOME
        );
    }

    /**
        * Creates a successful `Operation` with the given success value.
        * 
        * @template T - The type of the success value.
        * @param success - The success value to be wrapped in an `Operation`.
        * @returns A successful `Operation` instance.
    */

    public static successful<T>(success: T): Operation<never, T> {
        return new Operation<never, T>(WentWell.create(success));
    }

    /**
        * Creates a failed `Operation` with the given failure value.
        * 
        * @template Q - The type of the failure value.
        * @param fail - The failure value to be wrapped in an `Operation`.
        * @returns A failed `Operation` instance.
    */

    public static failure<Q>(fail: Q): Operation<Q, never> {
        return new Operation<Q, never>(GoneWrong.create(fail));
    }

    /**
        * Merges multiple `Operation` instances into one.
        * If any operation fails, returns that operation.
        * 
        * @template K - The type of the failure value for the merged operation.
        * @template I - The type of the success value for the merged operation.
        * @param operations - The list of operations to be merged.
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
            if (operation.outcome.isGoneWrong()) {
                return TypeGuard.safeCast<Operation<K, never>>(
                    operation,
                    () => operation.outcome.isGoneWrong(),
                    OPERATION_ERROR.MERGE_FAILURE
                );
            }
        }

        return Operation.successful(firstOperation.positiveOutcome());
    }
}

/**
    * Enum for operation error messages.
*/

enum OPERATION_ERROR {

    /**
        * Error message indicating that a negative outcome cannot be obtained for a successful operation.
        * Suggests using 'positiveOutcome' instead.
    */

    POSITIVE_OUTCOME = 'Unable to get a negative outcome for a successful operation. Use \'positiveOutcome\' instead.',

    /**
        * Error message indicating that a positive result cannot be obtained for a failed operation.
        * Suggests using 'negativeOutcome' instead.
    */

    NEGATIVE_OUTCOME = 'Unable to get a positive outcome for a failure operation. Use \'negativeOutcome\' instead.',

    /**
        * Error message indicating that an operation failed during merging operations.
        * Suggests checking the failed operation.
    */

    MERGE_FAILURE = 'One or more operations failed during merge. Use `negativeOutcome` to retrieve the failure details.'

}