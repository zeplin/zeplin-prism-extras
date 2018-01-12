#!/bin/bash
set -e

COMPONENTS_DIR="components"
DIR="dist"

mkdir -p $DIR

for COMPONENT_PATH in components/*.js; do
    COMPONENT_NAME=$(basename $COMPONENT_PATH .js)

    ./node_modules/.bin/uglifyjs $COMPONENT_PATH -o $DIR/$COMPONENT_NAME.min.js --source-map filename=$DIR/$COMPONENT_NAME.min.js.map
done
