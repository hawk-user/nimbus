
import { Config } from 'jest';

/*
    * Configuration object for general use in the Jest testing framework.
*/

export const baseConfig: Config = {

    /*  
        * List of file extensions that the module loader should recognize and process.
        * Includes TypeScript (.ts) and JavaScript (.js) files.
    */
   
    moduleFileExtensions: [ 'ts', 'js' ],

    /* 
        * Directory containing the source files for the project.
        * Jest will use this directory as the root when resolving modules and 
        * transforming files. It is relative to the configuration file.
    */

    rootDir: '../../src',

    /* 
        * Maps module names to specific paths or module files,
        * allowing to use custom aliases for modules in tests.
    */

    moduleNameMapper: {

        /* 
            * Maps the module name '@ueye/core' to a specific file path.
            * This allows to import '@ueye/core' in tests.
        */

        '@ueye/core': '<rootDir>/libs/core/index',

         /* 
            * Maps the module name '@ueye/infra' to a specific file path.
            * This allows to import '@ueye/infra' in tests.
        */

         '@ueyeinfra': '<rootDir>/libs/infra/index'

    },

    /* 
        * Rules for transforming files before running tests.
        * Files matching the specified pattern (TypeScript files)
        * will be processed with the `ts-jest` transformer. 
    */

    transform: { '^.+\\.ts?$': 'ts-jest' },

    /* 
        * Regular expression pattern used to identify test files.
        * Matches files with a `.ts` extension and optionally those
        * including `.test` in their name. 
    */

    testRegex: '.*\\.(test)?\\.(ts)$'

};