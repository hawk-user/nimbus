
import { Config } from 'jest';
import { baseConfig } from './base.config';

/* 
    * Configuration object for the utils module,
    * extending the base configuration. 
*/

const utilsConfig: Config = {

    /* Include all properties from the baseConfig. */

    ...baseConfig,

    /* 
        * Specifies the root directories where test files are located
        * for the utils module.
    */

    roots: [ '../tests/libs/utils/unit' ],

    /* 
        * Configuration for the display name used in the test environment.
        * This helps in identifying the utils module in outputs or logs
        * with specific styling.
    */

    displayName: { 

        /* The name to display, which helps identify the utils module. */

        name: 'Utils', 

        /* 
            * The color used for the display name, making it stand out
            * in the UI or logs. 
        */
        
        color: 'grey'

    }

};

export default async (): Promise<Config> => utilsConfig;