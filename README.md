# Simple REST API in NODEJS evaluation

**Prerequisites:** NODEJS, Express, MySQL


## Getting Started

Clone this project using the following commands:

```
git@github.com:cnodax/cnodax.git
cd cnodax
```

### Configure the application

Create the database and user for the project:

```
mysql -uroot -p
CREATE DATABASE test_cnodax CHARACTER SET utf8mb4 COLLATE utf8mb4_9000_ci;
CREATE USER 'api_user'@'localhost' identified by 'api_password';
GRANT ALL on test_cnodax.* to 'api_user'@'localhost';
quit
```

Copy and edit the `.env.exampli` file and enter your database details and options details there:

```
cp .env.example .env
```

Install the project dependencies and start the NODEJS server:

```
npm install
npm run dev
```

Loading [127.0.0.1:{port}]


### Run postman

In the resources directory, will find the Database file and the postman file to test the api:

```
Dump20221010.sql
Falabella NODEJS.postman_collection.json
```
