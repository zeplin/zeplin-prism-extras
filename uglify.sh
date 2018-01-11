#!/bin/bash
set -e

COMPONENTS_DIR="components"
DIR="dist"

mkdir -p $DIR

for COMPONENT_PATH in components/*.js; do
    COMPONENT=${COMPONENT_PATH#$COMPONENTS_DIR/}
    COMPONENT_NAME=${COMPONENT%.*}

    ./node_modules/.bin/uglifyjs $COMPONENT_PATH -o $DIR/$COMPONENT_NAME.min.js --source-map filename=$DIR/$COMPONENT_NAME.min.js.map
done
