
import { Config } from 'jest';
import { baseConfig } from './base.config';

/* 
    * Configuration object for the coverage report,
    * extending the base configuration. 
*/

const coverageConfig: Config = {

    /* Include all properties from the baseConfig. */

    ...baseConfig,

    /* 
        * Specifies the root directories where test files are located.
        * This path is relative and points to the test root directory.
    */

    roots: [ '../tests' ],

    /* 
        * Specifies which reporters to use. "default" is a
        * built-in reporter that provides standard output. 
    */

    reporters: [ 'default' ],


    /* Enable collection of coverage information. */
    
    collectCoverage: true,

    /* 
        * Defines the directory where coverage reports will be output.
        * 'coverage' is the directory where the coverage files will be saved.
    */

    coverageDirectory: '../coverage'

}

export default async (): Promise<Config> => coverageConfig;