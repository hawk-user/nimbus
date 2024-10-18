
import { Prompt } from './interface.prompt';
import { ProgramExitCodes } from '../../artifacts';

/**
    * Represents the output of a program, including a prompt message and an exit code.
*/

export interface ProgramOutput {

    /**
        * The prompt message to be displayed.
    */
   
    prompt: Prompt;

    /**
        * The exit code indicating the result of the program execution.
    */

    exitCode: ProgramExitCodes;

}