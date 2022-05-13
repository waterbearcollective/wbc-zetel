#!/bin/bash

git add *
git commit -m 'update'
git push
cp -r _site/* ../waterbearcollective.github.io
cd ../waterbearcollective.github.io/
git add *	
git commit -m 'update'
git push
