#!/bin/sh

# Define parameters
platformName=linux/arm64
imageOwner=guna3006
imageName=tmfm
tag=5.0.0

# Check if parameters are provided
if [ -z "$platformName" ] || [ -z "$imageOwner" ] || [ -z "$imageName" ] || [ -z "$tag" ]; then
  echo "Usage: $0 <platformName> <imageOwner> <imageName> <tag>"
  exit 1
fi

echo 'Run Docker Buildx command'
docker buildx build --platform $platformName -t $imageOwner/$imageName:$tag .
echo 'Docker Buildx command completed'