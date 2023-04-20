FROM node:18.16.0-alpine3.17 AS oostaoo-smart-scrapper-app

# working directory
WORKDIR /app

# Copy the local app package and package-lock.json file to the container
COPY ./app/package*.json /app

RUN yarn install

# Copy all files from the project directory into the app folder container
COPY ./app /app

EXPOSE 3000

ENTRYPOINT [ "yarn", "dev" ]