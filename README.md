# Oostaoo Smart Scrapper

---

## Start the project

### First step : installation

After cloning the project, run the following command :

```js
yarn install
```

This project uses yarn so please use yarn and not NPM or others to prevent compatibility issues.

### Second step : Docker

Install Docker from https://www.docker.com, then run the project script at the root of the project :

```sh
sh project.sh
```

You'll get a menu prompt allowing you to :

- Start the project with Docker : will pull the images and mount the containers for all services
- Stop the containers
- Purge : will remove all containers
- Exit the menu if you don't remember why you were here in the first place.

Once everything had started, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The project will run in a container so visual updates on your navigator will be a little slower than usual.

---

## Useful commands

| Scripts         | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| sh project.sh   | Menu prompt to start/stop/purge the Docker containers           |
| yarn lint       | Will start the linter, useful to see uncatched formating errors |
| yarn lint --fix | Will try to fix most of the linter errors. Not 100% reliable    |
| yarn test       | Will run Jest in watch mode                                     |
| yarn coverage   | Will run Jest and give you the overall test coverage            |

---

## API

| Routes       | Method | Payload             | Response                                  | Description                                      |
| ------------ | ------ | ------------------- | ----------------------------------------- | ------------------------------------------------ |
| /api/openapi | POST   | { message: string } | message: { role: string, content: string} | Send a prompt to ChatGPT and then get its answer |

---

## Tech

- Next.js
- Tailwind
- TypeScript
- ESlint (AirBnB configuration)
- Jest
- GraphQL / Apollo
- Postgres
- Redis
- RabbitMQ
- Husky
- OpenAI
- Awesome developers

---

## Git flow

- Always create an issue in the [Smart Scrapper Project](https://github.com/orgs/oostaoo-consulting/projects/1) first, don't forget all the options (assignee, priority...)
- Create a new branch from the development branch with the right naming convention type/#issueNumber/issueName (i.e. Feature/#38/Centering_a_div)
- When you're finished, create a pull request (don't forget to add reviewers) and link it to the issue you'vre created earlier in the development option of the PR.

Every commit will call Husky to lint your code.
Every push will call Husky to look at your test coverage. 80% coverage is mandatory !
Be nice to Husky.
