
import { AnsiEscapeCodes } from './ansi.escape.codes';

/**
    * Enum representing formatted output stickers for terminal messages.
*/

export enum OuputStickers {

    /** Represents an informational sticker, styled with a cyan background. */

    INFO = `${ AnsiEscapeCodes.BG_CYAN } info ${ AnsiEscapeCodes.RESET }`,

    /** Represents a warning sticker, styled with a yellow background. */

    WARNING = `${ AnsiEscapeCodes.BG_YELLOW } warn ${ AnsiEscapeCodes.RESET }`,

    /** Represents an error sticker, styled with a red background. */

    ERROR = `${ AnsiEscapeCodes.BG_RED } error ${ AnsiEscapeCodes.RESET }`,

    /** Represents a success sticker, styled with a green background. */

    SUCCESS = `${ AnsiEscapeCodes.BG_GREEN } success ${ AnsiEscapeCodes.RESET }`,

    /** Represents a debug sticker, styled with a grey background. */

    DEBUG = `${ AnsiEscapeCodes.BG_GREY } debug ${ AnsiEscapeCodes.RESET }`,

    /** Represents a critical sticker, styled with a magenta background. */

    CRITICAL = `${ AnsiEscapeCodes.BG_MAGENTA } critical ${ AnsiEscapeCodes.RESET }`

}