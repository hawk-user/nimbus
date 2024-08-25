/**
    * Enum representing formatted output stickers for terminal messages.
    * These stickers are used to prefix terminal output with context-specific labels.
*/

export enum OutputSticker {

    /** Represents an informational sticker */

    INFO = '[info]: ',

    /** Represents a warning sticker */

    WARNING = '[warn]: ',

    /** Represents an error sticker */

    ERROR = '[error]: ',

    /** Represents a success sticker */

    SUCCESS = '[success]: ',

    /** Represents a debug sticker */

    DEBUG = '[debug]: ',

    /** Represents a critical sticker */

    CRITICAL = '[critical]: '
}

/**
    * Type representing the values of the OutputSticker enum.
*/

export type OutputStickers = typeof OutputSticker[keyof typeof OutputSticker];
