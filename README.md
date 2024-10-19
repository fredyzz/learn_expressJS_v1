# learn_expressJS_v1

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
