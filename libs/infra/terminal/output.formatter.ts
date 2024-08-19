
import {
    okSticker,
    internalSticker,
    ideaSticker,
    unableToFindSticker
} from './constants';

/**
    * Utility class for formatting output messages with stickers and additional info.
*/

export class OutputFormatter {

    /**
        * Formats the output message by combining the sticker, message, and optional additional info.
        * 
        * @template X - The type of additional information.
        * 
        * @param sticker - The sticker representing the type of message (e.g., 'ok', 'internal').
        * @param info - Additional information, such as data or error details.
        * @returns The formatted output string.
    */

    private static formatOutput<X>(
        sticker: string,
        info: Error | string | X,
    ): string {
        return info instanceof Error 
            ? `${ sticker } ${ info.stack }\n`
            : `${ sticker } ${ info }\n`;
    }

    /**
        * Formats a success message.
        * 
        * @template T - The type of data.
        * 
        * @param data - Data to be included in the output.
        * @returns The formatted success message with the 'ok' sticker.
    */

    public static ok<T>(data: string | T): string {
        return this.formatOutput<T>(okSticker, data);
    }

    /**
        * Formats an internal error message.
        * 
        * @param error - Error object, with stack trace or message to be included in the output.
        * @returns The formatted internal error message with the 'internal' sticker.
    */

    public static internal(error: Error | string): string {
        return this.formatOutput(internalSticker, error);
    }

    /**
        * Formats an idea message.
        * 
        * @param hint - Hint or suggestion to be included in the output.
        * @returns The formatted idea message with the 'idea' sticker.
    */

    public static idea(hint: string): string {
        return this.formatOutput(ideaSticker, hint);
    }

    /**
        * Formats an 'untofi' message, indicating missing information or resources.
        * 
        * @param error - Error object, with stack trace or message to be included in the output.
        * @returns The formatted 'untofi' message with the corresponding sticker.
    */

    public static unableToFind(error: Error | string): string {
        return this.formatOutput(unableToFindSticker, error);
    }

}