FROM node:18-alpine AS oostaoo-smart-scrapper-app

# working directory
WORKDIR /app

# Copy the local app package and package-lock.json file to the container
COPY ./package*.json ./

RUN npm install

# Copy all files from the project directory into the app folder container
COPY . .

EXPOSE 3000

ENTRYPOINT [ "yarn", "run", "dev" ]