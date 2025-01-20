# CSV Data Ingestion API

This is an Express-based Node.js application that processes a CSV file and inserts the parsed data into a database. The application maps the CSV data to the database schema dynamically based on the request payload and uses Sequelize for ORM.

## Features

- Reads data from a `sample.csv` file.
- Dynamically maps CSV columns to database fields based on the request payload.
- Validates and inserts data into three tables: `account`, `location`, and `contact`.
- Uses Sequelize for database interactions and validation.
- Supports error handling for data validation and insertion.

## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)
- **Sequelize** (configured with your database)
- A configured database (PostgreSQL, MySQL, or any other supported by Sequelize)

