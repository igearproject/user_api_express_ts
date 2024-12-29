# User API Express TypeScript

This is a guide to set up and run the **User API Express TypeScript** project on another computer.

## Prerequisites

Make sure the following software is installed on your system:

1. **Node.js**: Ensure you have Node.js installed. You can use the correct version specified in the `.nvmrc` file by using `nvm`.
2. **npm** or **yarn**: Package manager for Node.js.
3. **Git**: To clone the repository.
4. **Database**: Make sure the database (e.g., MySQL/PostgreSQL/MongoDB) is set up and running based on the environment configuration.

## Steps to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/igearproject/user_api_express_ts.git
```

Navigate to the project directory:

```bash
cd user_api_express_ts
```

### 2. Set Node.js Version

The project uses a specific version of Node.js, defined in the `.nvmrc` file. Use `nvm` to switch to the correct version:

```bash
nvm use
```

If the version is not installed, run:

```bash
nvm install
```

### 3. Install Dependencies

Install the required dependencies using `npm` or `yarn`:

```bash
npm install
```

or

```bash
yarn install
```

### 4. Set Up Environment Variables

The project includes an `example.env` file that lists the required environment variables. Create a `.env` file by copying the example file:

```bash
cp example.env .env
```

Edit the `.env` file to configure the environment variables (e.g., database connection details):

```bash
DB_NAME=database_name
DB_USERNAME=root
DB_PASSWORD=password_db
DB_HOST=127.0.0.1
DB_PORT=3306
```

### 5. Run Database Migrations

If the project uses a database and requires migrations, run the following command to apply them:

```bash
npm run migrate
```

or (if the script is different):

```bash
npx sequelize-cli db:migrate
```

### 6. Start the Application

#### In Development Mode

To start the application with hot reload:

```bash
npm run dev
```

#### In Production Mode

First, build the project:

```bash
npm run build
```

Then, start the built application:

```bash
npm start
```

### 7. Access API Documentation

The project uses Swagger for API documentation. Once the server is running, you can access the documentation at:

```
http://localhost:3000/api-docs
```

Replace `3000` with the port number specified in your `.env` file if it's different.

### 8. Run Tests

To run unit tests:

```bash
npm run test
```

To run tests in watch mode:

```bash
npm run test:watch
```
