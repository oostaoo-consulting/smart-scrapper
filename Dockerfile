FROM node:18.16.0-alpine3.17

WORKDIR /app

COPY /package.json /yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

ENTRYPOINT ["yarn", "dev"]
