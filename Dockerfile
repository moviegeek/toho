FROM node:10-alpine
LABEL author="laputa"

WORKDIR /app
COPY . ./
RUN npm install

ENTRYPOINT [ "node", "--experimental-modules", "./server.mjs" ]