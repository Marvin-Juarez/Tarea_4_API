FROM node:24-alpine3.24 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev --ignore-scripts

COPY app.js .

FROM node:24-alpine3.24

RUN apk upgrade --no-cache \
    && rm -rf /usr/local/lib/node_modules/npm \
    /usr/local/lib/node_modules/corepack \
    /opt/yarn-v1.22.22

WORKDIR /app

COPY --from=build --chown=node:node /app /app

USER node

EXPOSE 3000

CMD ["node", "app.js"]