
import { Config } from 'jest';
import { baseConfig } from './base.config';

/* 
    * Configuration object for the report,
    * extending the base configuration. 
*/

const reportConfig: Config = {

    /* Include all properties from the baseConfig. */

    ...baseConfig,

    /* 
        * Specifies the root directories where test files are located.
        * This path is relative and points to the test root directory.
    */

    roots: [ '..' ],

    reporters: [ 

        /* Default reporter that provides standard output. */

        'default',

        /* 
            * Jest JUnit reporter configuration for generating
            * JUnit-compatible test reports.
        */

        [

            'jest-junit', 

            { 
                /* Directory where the JUnit report files will be saved. */

                outputDirectory: 'report',

                /* Separator used to denote hierarchy in the report titles. */

                ancestorSeparator: ' › ',

                /* 
                    * Determines if each test suite should have a unique name.
                    * Setting 'false' means that the test suite names will
                    * not be unique. 
                */

                uniqueOutputName: 'false',

                /* 
                    * Template for the suite name in the report.
                    * {filepath} will be replaced with the path of the file
                    * where the test is defined.
                */

                suiteNameTemplate: '{filepath}',

                /* 
                    * Template for the class name in the report.
                    * {classname} will be replaced with the name of the
                    * class where the test is defined.
                */

                classNameTemplate: '{classname}',
                

                /* 
                    * Template for the test title in the report.
                    * {title} will be replaced with the title of the individual test.
                */

                titleTemplate: '{title}'

            } 
        ]
    ],

}

export default async (): Promise<Config> => reportConfig;