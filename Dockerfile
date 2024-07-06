FROM --platform=${BUILDPLATFORM} node:18.18.2-bullseye as node-builder
WORKDIR /build
COPY package.json .

RUN yarn config set registry 'https://registry.npmmirror.com' && \
    yarn install

COPY . .

RUN yarn docs:build

FROM nginx:stable-alpine

COPY default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=node-builder /build/.vitepress/dist /usr/share/nginx/html

EXPOSE 80 443
