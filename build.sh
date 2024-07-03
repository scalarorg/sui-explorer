#!/bin/sh
DIR="$( cd "$( dirname "$0" )" && pwd )"
REPO_ROOT="$(git rev-parse --show-toplevel)"

echo "Building for production"
docker build -f Dockerfile "$REPO_ROOT" "$@"
