FROM node:18.16.0-alpine3.17

WORKDIR /app

COPY /package.json /yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

WORKDIR /app/src/prisma

RUN npx prisma generate

WORKDIR /app

EXPOSE 3000

ENTRYPOINT ["yarn", "dev"]
