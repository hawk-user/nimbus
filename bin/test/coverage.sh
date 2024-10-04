#!/bin/bash

# Remove any existing coverage data to start fresh
rimraf ./coverage

# Run acceptance tests with Cucumber and collect coverage data
nyc --reporter='json' --report-dir='./coverage/.tmp/acceptance-test' cucumber-js --config='./tests/setup/coverage/configat.yaml' > /dev/null

# Run unit tests with Mocha and collect coverage data
nyc --reporter='json' --report-dir='./coverage/.tmp/unit-test' mocha --config='./tests/setup/coverage/configut.yaml' > /dev/null

# Merge the acceptance test coverage data into a combined coverage directory
nyc merge './coverage/.tmp/acceptance-test' './coverage/.tmp/combined' > /dev/null

# Merge the unit test coverage data into the combined coverage directory
nyc merge './coverage/.tmp/unit-test' './coverage/.tmp/combined' > /dev/null

# Generate the final coverage report in LCOV format and displayed result on the terminal
nyc report --reporter='json' --reporter='text' --report-dir='./coverage' --temp-directory='./coverage/.tmp'

# # Clean up temporary coverage data
rimraf ./coverage/.tmp

# Notify the user where the coverage report is located
echo "Coverage report generated in ./coverage"
