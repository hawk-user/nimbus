
import { TextUtils } from './text.utils';

/**
    * Utility class for operations related to Buffers (Uint8Array).
*/

export class BufferUtils {

    /**
        * Converts a Buffer (Uint8Array) to a string using the specified encoding.
        *
        * @param data - The Buffer (Uint8Array) to convert to a string.
        * @param encoding - The encoding to use for conversion (e.g., 'utf8', 'ascii').
        * @returns The string representation of the Buffer.
    */

    private static toString(
        data: Uint8Array,
        encoding: BufferEncoding
    ): string {
        const decoder = new TextDecoder(encoding);
        return decoder.decode(data);
    }

    /**
        * Converts a Buffer (Uint8Array) to a UTF-8 encoded string.
        *
        * @param data - The Buffer (Uint8Array) to convert to a UTF-8 string.
        * @returns The UTF-8 string representation of the Buffer.
    */

    public static toUTF8String(data: Uint8Array): string {
        return this.toString(data, 'utf8');
    }

    /**
        * Converts a Buffer (Uint8Array) to a trimmed UTF-8 encoded string.
        *
        * @param data - The Buffer (Uint8Array) to convert to a trimmed UTF-8 string.
        * @returns The trimmed UTF-8 string representation of the Buffer.
    */

    public static toUTF8StringTrimmed(data: Uint8Array): string {
        return TextUtils.stripWhitespace(this.toUTF8String(data));
    }
    
}