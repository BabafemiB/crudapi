FROM node:18.17.1-alpine as base

FROM base as builder

# deps for post-install scripts
RUN apk add --update --no-cache \
    python3 \
    make \
    git \
    g++

WORKDIR /usr/src/app

COPY package.json ./

# npm rebuild bcrypt --update-binary
# RUN npm install --only=production && npm rebuild bcrypt --build-from-source && NODE_ENV=development npm run build
RUN yarn install

FROM base

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY . .

ARG NODE_ENV=production
ARG ENV_FILE

COPY ${ENV_FILE} .env


ENV NODE_ENV=${NODE_ENV}

RUN yarn build && yarn build:docs

EXPOSE 4000 4000



CMD [ "node", "server.js" ]


