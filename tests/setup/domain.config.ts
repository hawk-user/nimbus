
import { Config } from 'jest';
import { baseConfig } from './base.config';

/* 
    * Configuration object for the domain module,
    * extending the base configuration. 
*/

const domainConfig: Config = {

    /* Include all properties from the baseConfig. */

    ...baseConfig,

    /* 
        * Specifies the root directories where test files are located
        * for the domain module.
    */

    roots: [ '../tests/libs/ddd/unit' ],

    /* 
        * Configuration for the display name used in the test environment.
        * This helps in identifying the domain module in outputs or logs
        * with specific styling.
    */

    displayName: { 

        /* The name to display, which helps identify the domain module. */

        name: 'Domain', 

        /* 
            * The color used for the display name, making it stand out
            * in the UI or logs. 
        */
        
        color: 'whiteBright'

    }

};

export default async (): Promise<Config> => domainConfig;