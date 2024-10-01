
import { Config } from 'jest';
import { baseConfig } from './base.config';

/* 
    * Configuration object for the infra module,
    * extending the base configuration. 
*/

const infraConfig: Config = {

    /* Include all properties from the baseConfig. */

    ...baseConfig,

    /* 
        * Specifies the root directories where test files are located
        * for the infra module.
        * This path is relative and points to the infra library's directory.
    */

    roots: [ '../tests/libs/infra/unit-test' ],

    /* 
        * Configuration for the display name used in the test environment.
        * This helps in identifying the infra module in outputs or logs
        * with specific styling.
    */

    displayName: { 

        /* The name to display, which helps identify the infra module. */

        name: 'infra', 

        /* 
            * The color used for the display name, making it stand out
            * in the UI or logs. 
        */
        
        color: 'magentaBright'

    }

};

export default async (): Promise<Config> => infraConfig;