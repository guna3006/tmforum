#!/bin/sh

file=/server.js
if [ -f $file ]; then
    nodemon /server.js
else
echo "Error: $file not found."
    nodemon server.js
fi
