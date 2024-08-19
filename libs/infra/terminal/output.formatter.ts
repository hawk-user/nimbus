
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
        * @param sticker - The sticker representing the type of message (e.g., 'ok', 'internal').
        * @param msg - The main message to be displayed.
        * @param additionalInformation - Optional additional information, such as data or error details.
        * @returns The formatted output string.
    */

    private static formatOutput(
        sticker: string,
        msg: string,
        additionalInformation?: Error | string
    ): string {
        return additionalInformation 
            ? `${ sticker } ${ msg } \n  ${ additionalInformation }`
            : `${ sticker } ${ msg }`;
    }

    /**
        * Formats a success message.
        * 
        * @param msg - The main success message.
        * @param data - Optional data to be included in the output.
        * @returns The formatted success message with the 'ok' sticker.
    */

    public static ok<T>(msg: string, data?: T): string {
        return this.formatOutput(okSticker, msg, data?.toString());
    }

    /**
        * Formats an internal error message.
        * 
        * @param msg - The main error message.
        * @param error - Optional error object, with stack trace or message to be included in the output.
        * @returns The formatted internal error message with the 'internal' sticker.
    */

    public static internal(msg: string, error?: Error): string {
        return this.formatOutput(internalSticker, msg, error);
    }

    /**
        * Formats an idea message.
        * 
        * @param msg - The main idea message.
        * @param hint - Optional hint or suggestion to be included in the output.
        * @returns The formatted idea message with the 'idea' sticker.
    */

    public static idea(msg: string, hint?: string): string {
        return this.formatOutput(ideaSticker, msg, hint);
    }

    /**
        * Formats an 'untofi' message, indicating missing information or resources.
        * 
        * @param msg - The main message indicating the issue.
        * @param error - Optional error object, with stack trace or message to be included in the output.
        * @returns The formatted 'untofi' message with the corresponding sticker.
    */

    public static unableToFind(msg: string, error?: Error): string {
        return this.formatOutput(unableToFindSticker, msg, error);
    }

}