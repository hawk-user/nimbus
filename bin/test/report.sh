#!/bin/bash

# Remove any existing coverage data to start fresh
rimraf ./report

# Create a new directory for the report
mkdir report

# Run Mocha tests with the xUnit reporter and specified configuration, outputting results to test-suite.xml
mocha --reporter='xunit' --config='tests/setup/unit-test/configut.yaml' > report/test-suite.xml

# Run Cucumber.js tests and output results in JSON format to cucumber-report.json
cucumber-js --format json:report/cucumber-report.json --config='tests/setup/acceptance-test/configat.yaml' > /dev/null

# Print a message indicating that the report has been generated
echo "Report generated in ./report"
