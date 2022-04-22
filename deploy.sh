#!/bin/bash

git add *
git commit -m 'update'
git push
cp -r _site/* ../ideas
cd ../ideas/
git add *	
git commit -m 'update'
git push
