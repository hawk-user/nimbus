
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
        * Maps module names to specific paths or module files,
        * allowing to use custom aliases for modules in tests.
    */

    moduleNameMapper: {

        /* 
            * Maps the module name '@gherkineye/core' to a specific file path.
            * This allows to import '@gherkineye/core' in tests.
        */

        '@gherkineye/core': '<rootDir>../../src/libs/core/index'

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