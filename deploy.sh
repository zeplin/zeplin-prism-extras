#!/bin/bash
set -e

DIR="dist"
NAME="zeplin-prism-extras.min.js"
VERSION=$(git describe --tags --exact-match)

npm run build:prod
sudo aws s3 cp $DIR/$NAME $S3_DIR/${VERSION#v}/$NAME --acl public-read
