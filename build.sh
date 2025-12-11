#!/usr/bin/env sh
fnames()
{
    echo 'var FNAMES=`'
    find * -type f -name '*.yaml' -o -name '*.json'
    echo '`'
}

fnames > dist/swagger-initializer.js
cat dist/swagger-initializer-utils.js >> dist/swagger-initializer.js
