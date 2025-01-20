# CSV Data Ingestion API

This is an Express-based Node.js application that processes a CSV file and inserts the parsed data into a database. The application maps the CSV data to the database schema dynamically based on the request payload and uses Sequelize for ORM.

## Features

- Reads data from a `sample.csv` file.
- Dynamically maps CSV columns to database fields based on the request payload.
- Validates and inserts data into three tables: `account`, `location`, and `contact`.
- Uses Sequelize for database interactions and validation.
- Supports error handling for data validation and insertion.
- 
## About the `fs` Module

The `fs` module in Node.js is a core module that provides an API for interacting with the file system. It enables you to work with files and directories, such as reading, writing, creating, deleting, and streaming file data. This application uses the `fs` module to read the CSV file (`sample.csv`) as a stream and process its content row by row.

### How the `fs` Module is Used in This Project:
- **File Reading**: The `fs.createReadStream()` method is used to create a readable stream from the `sample.csv` file.
- **Streaming Data**: The readable stream is piped to the `csv-parser` to parse the CSV content row by row efficiently, without loading the entire file into memory.

### Example:
```javascript
const fs = require("fs");

const csvReadStream = fs.createReadStream("sample.csv");
csvReadStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
csvReadStream.on("end", () => {
  console.log("File reading completed!");
});
## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)
- **Sequelize** (configured with your database)
- A configured database (PostgreSQL, MySQL, or any other supported by Sequelize)

