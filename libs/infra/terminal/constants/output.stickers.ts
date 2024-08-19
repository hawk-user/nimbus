
import { ANSI_ESCAPE_CODE } from './ansi.escape.code';

/**
    * Sticker used for formatting successful operation messages.
    * 
    * Displays a cyan background with the label 'ok'.
*/

export const okSticker = `${ ANSI_ESCAPE_CODE.BG_CYAN } ok ${ ANSI_ESCAPE_CODE.RESET }`;

/**
    * Sticker used for formatting internal error messages.
    * 
    * Displays a magenta background with the label 'internal'.
*/

export const internalSticker = `${ ANSI_ESCAPE_CODE.BG_MAGENTA } internal ${ ANSI_ESCAPE_CODE.RESET }`;

/**
    * Sticker used for formatting idea or suggestion messages.
    * 
    * Displays a yellow background with the label 'idea'.
*/

export const ideaSticker = `${ ANSI_ESCAPE_CODE.BG_YELLOW } idea ${ ANSI_ESCAPE_CODE.RESET }`;

/**
    * Sticker used for formatting messages indicating missing information or resources.
    * 
    * Displays a orange background with the label 'untofi' (unable to find).
*/

export const unableToFindSticker = `${ ANSI_ESCAPE_CODE.BG_ORANGE } untofi ${ ANSI_ESCAPE_CODE.RESET }`;