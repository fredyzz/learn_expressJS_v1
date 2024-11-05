# learn_expressJS_v1

## Commands

To start DDBB docker container:

```bash
docker start postgresql-test
```

To start server:

```bash
npm run dev
```

To start server in watch mode, to restart on any code change:

```bash
npm run dev:watch
```

## How to run Postgres DDBB localy with docker

```bash
docker run --name postgresql-test \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_PASSWORD=mypassword \
  -e POSTGRES_DB=mydatabase \
  -p 5432:5432 \
  -v my_postgres_data:/var/lib/postgresql/data \
  -d postgres
  ```

  **This should be the connection string:**
  postgresql://myuser:mypassword@localhost:5432/mydatabase

## How to execute a Prisma DDBB migration

```bash
npx prisma migrate dev --name init
```

## Start Prisma Studio

```bash
npx prisma studio
```

## Run jest configurator

```bash
npx ts-jest config:init
```

## Testing the APIs

A ThunderClient collection is included in the repository, it can be imported and used in the VSCODE ThunderClient extension.

## Used in this project

[Morgan](https://github.com/expressjs/morgan) -  HTTP request logger middleware for node.js

[Prisma](https://github.com/prisma/prisma) - ORM.

[Express validator](https://www.npmjs.com/package/express-validator) - Validation tool for handlers

[Supertest](https://www.npmjs.com/package/supertest) - High-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.

[Jest](https://jestjs.io/) - JavaScript Testing Framework with a focus on simplicity.
