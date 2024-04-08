FROM node:latest

ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

COPY package*.json ./
COPY yarn.lock .

RUN yarn install

COPY . .

CMD ["yarn", "start"]
