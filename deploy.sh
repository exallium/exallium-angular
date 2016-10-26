#!/bin/bash

ng build
echo "www.exallium.com" > dist/CNAME
push-dir --dir=dist --remote=gh-pages --branch=master --cleanup
