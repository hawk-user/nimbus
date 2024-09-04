
import { SuccessExitCodes, ExitCodes } from '../exit.codes';
import { ObjectUtils } from '@ueye/utils';


/**
    * Represents the structure of a formatted output.
*/

export interface Output {

    /**
        * The exit code associated with the output.
    */

    code: SuccessExitCodes;

    /**
        * The content of the output, typically a message or serialized data.
    */

    content: string;

}


/**
    * class for formatting output
*/

export class BaseOutput {

    /**
        * Formats data into a structured output.
        *
        * @param data - The data to format. Can be of any type.
        * @param code - The exit code associated with the output.
        * @returns The formatted output object.
    */

    protected static format<Q>(
        data: Q,
        code: SuccessExitCodes
    ): Output {
        return typeof data === 'object' && data
        ? { content: `${ObjectUtils.toString(data)}\n`, code }
        : { content: `${data}\n`, code }
    }

    /**
        * Formats data as a success output with the DONE exit code.
        * @param data - The data to be formatted.
        * @returns The formatted success output.
    */

    public static done<T>(data: T): Output {
        return this.format<T>(
            data,
            ExitCodes.DONE
        );
    }

}