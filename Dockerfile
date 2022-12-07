FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
WORKDIR /opt/
COPY ./package.json ./
COPY ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
# Install is used instead of ci because of the difference between arm and x64 processor architecture used by developpers in the project
RUN npm ci
# RUN npm install
WORKDIR /opt/app
COPY ./ .
RUN npm run build
CMD ["npm", "run", "develop"]
