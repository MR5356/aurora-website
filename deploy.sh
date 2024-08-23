#!/bin/bash
set -uex
VERSION="website-v1.1.0-dev_build.$(date +%Y%m%d_%H%M%S)"

echo "构建镜像"
docker buildx build --platform linux/arm64,linux/amd64 -t toodo/aurora-website:${VERSION} . --push
#docker buildx build --platform linux/arm64,linux/amd64 -t toodo/aurora-website:latest . --push

helm upgrade --install --wait --kube-insecure-skip-tls-verify=true aurora-website -n toodo --set image.tag=${VERSION} ./charts
