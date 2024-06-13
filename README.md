# Car Price Estimator Project 

## Description

This project is a compact REST API developed with Node.js and TypeScript using NestJS framework, TypeORM, and PostgreSQL Databases. User authentication is managed through cookies and sessions.

An estimation service calculates the average price of a car based on the submitted reports, helping users gauge the market value of similar cars by filtering and averaging prices according to specified criteria.

## Installation and running the app

### 1. Install Dependencies:
Use the following command to install the required dependencies with the NPM package manager:
```bash
npm install
```

### 2. Start Docker Containers for the Database:
Start the PostgreSQL Docker containers in the background by running:

```bash
docker-compose up -d
```

### 3. Create Environment Files:
Create a `.env.development` file in the root directory of the project and add the following environment variables:
```bash
DB_NAME=preowned-vehicles
DB_USERNAME=admin
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_LOGGING=false
COOKIE_KEY=test
```

In the same way, fill the `.env.test` and `.env.production` when needed.

## API Endpoints

Route | Method | Description | Authentication
--- | --- | --- | ---
`/auth/profile` | `GET` | Get the current user | Yes
`/auth/signin` | `POST` | Login a user | No
`/auth/signout` | `POST` | Logout a user | Yes
`/auth/signup` | `POST` | Register a new user | No
`/auth/:id` | `GET` | Get other user profile | No
`/auth/:id` | `PATCH` | Update profile info | Yes
`/reports` | `GET` | Get the estimate | No
`/reports` | `POST` | Create a new report | Yes
`/reports/:id` | `PATCH` | Approve report | Yes (Admin only)