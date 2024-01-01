const express = require('express');
const application = express();
const fs = require('fs');
const fastcsv = require('fast-csv');
const { Client } = require('pg');

application.use(express.json());

const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'task',
  password: 'root@123',
  port: 5432,
});

client.connect();

application.post('/', async (req, res) => {
  const filePath = 'sample.csv';

  try {
    await client.query('BEGIN');

    const stream = fs.createReadStream(filePath);
    const csvStream = fastcsv
      .parse({ headers: true })
      .on('data', async (data) => {
        const { company_name, website, emp_size, emp_range, revenu, revenue_range, address, city, state, country, phone_no, dummy_col } = data;

        try {
          // Insert data into the accounts table and retrieve the account_id
          const accountResult = await client.query(
            'INSERT INTO accounts (company_name, website, emp_size, emp_range, revenu, revenue_range) VALUES($1,$2,$3,$4,$5,$6) RETURNING id',
            [company_name, website, emp_size, emp_range, revenu, revenue_range]
          );

          if (accountResult.rows && accountResult.rows.length > 0) {
            const accountId = accountResult.rows[0].id;

            // Convert the dummy_col array string to an actual array
            const dummyArray = JSON.parse(dummy_col); // Assuming the dummy_col is a JSON string representing an array

            // Insert data into the locations table with the foreign key account_id
            await client.query(
              'INSERT INTO locations (account_id, address, city, state, country, phone_no, dummy_col) VALUES($1, $2, $3, $4, $5, $6, $7)',
              [accountId, address, city, state, country, phone_no, dummyArray]
            );
          } else {
            throw new Error('Failed to retrieve account ID');
          }
        } catch (error) {
          await client.query('ROLLBACK');
          console.error('Error:', error);
          res.status(500).send('Error inserting data');
        }
      })
      .on('end', async () => {
        await client.query('COMMIT');
        res.status(200).send('Data inserted successfully');
      });

    stream.pipe(csvStream);
  } catch (err) {
    await client.query('ROLLBACK');
    res.status(500).send('Error inserting data');
  }
});

application.listen(9000, () => {
  console.log('Server running on port 9000');
});
