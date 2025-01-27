#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deploy'
git branch -M main

git push -f https://github.com/southasianmediauk/southasianmediauk.github.io.git main

cd -

