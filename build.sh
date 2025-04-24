#!/bin/bash

echo "Starting custom build script..."

# Exit on error
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project using Webpack
echo "Building the project with Webpack..."
npm run build

echo "Build completed successfully."