
/**
    * Utility class for operations related to Buffers.
*/

export class BufferUtils {

    /**
        * Converts a Buffer to a string using the specified encoding.
        *
        * @param data - The Buffer to convert to a string.
        * @param encoding - The encoding to use for conversion.
        * @returns The string representation of the Buffer.
    */

    private static toString(
        data: Buffer,
        encoding: BufferEncoding
    ): string {
        return data.toString(encoding);
    }

    /**
        * Converts a Buffer to a UTF-8 encoded string.
        *
        * @param data - The Buffer to convert to a UTF-8 string.
        * @returns The UTF-8 string representation of the Buffer.
    */

    public static toUTF8String(data: Buffer): string {
        return this.toString(data, 'utf8');
    }

    /**
        * Converts a Buffer to a trimmed UTF-8 encoded string.
        *
        * @param data - The Buffer to convert to a trimmed UTF-8 string.
        * @returns The trimmed UTF-8 string representation of the Buffer.
    */

    public static toUTF8StringTrimmed(data: Buffer): string {
        return this.toUTF8String(data).trim();
    }
    
}