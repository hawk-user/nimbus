#!/bin/bash

# Print a message indicating the start of the installation
echo "🤖 Starting installation of the 'pipelet' library..."

# Check if wasm-pack is installed
if ! command -v wasm-pack &> /dev/null
then
    echo "'wasm-pack' is not installed. Please install it first."
    echo "You can find the installation instructions at the following URL:"
    echo "https://rustwasm.github.io/wasm-pack/installer/"
    exit 1
fi

# Create a new directory for the report
cd libs/@pipelet

# Run the wasm-pack command to build the library
wasm-pack build --target nodejs --out-dir build --out-name index

# Check if the build was successful
if [ $? -eq 0 ]; then
    echo "✨ 'pipelet' library successfully built and installed!"
else
    echo "😢 Failed to build the 'pipelet' library. Please check the error messages above and try again."
    exit 1
fi
