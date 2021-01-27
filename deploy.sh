#!/bin/bash
set -e

DIR="dist"
VERSION=$(git describe --tags --exact-match)

npm run build
aws s3 cp $DIR/ $S3_DIR/${VERSION#v}/ --recursive --acl public-read
