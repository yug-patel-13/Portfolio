// Import required modules
const express = require('express'); // Import the Express framework
const cors = require('cors'); // Import the CORS middleware
const bodyParser = require('body-parser'); // Import the body-parser middleware
const mysql = require('mysql'); // Import the MySQL library

// Initialize the Express app
const app = express();
const port = 3000; // Define the port number for the server

// Middleware setup
app.use(cors()); // Enable CORS for all routes and origins
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse incoming URL-encoded requests

// Database connection setup
const db = mysql.createConnection({
  host: 'localhost', // Database host
  user: 'root', // Database user
  password: '', // Database password
  database: 'portfolio_info' // Database name
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Define a simple route
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Saved Data</title>
  <style>.data-container {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  
  .data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .data-table th, .data-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .data-table th {
    background-color: #f2f2f2;
    color: black;
  }
  
  .data-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .data-table tr:hover {
    background-color: #ddd;
  }
  </style>
</head>
<body>
  <div class="data-container">
    <h1>Saved Data</h1>
    <table class="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody id="data-body">
        <!-- Data will be inserted here by JavaScript -->
      </tbody>
    </table>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/data');
  const data = await response.json();

  const dataBody = document.getElementById('data-body');
  data.forEach(item => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = item.email;
    row.appendChild(emailCell);

    const messageCell = document.createElement('td');
    messageCell.textContent = item.message;
    row.appendChild(messageCell);

    dataBody.appendChild(row);
  });
});

  </script>
</body>
</html>
`);
});

// Define a route to fetch data from the database
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM data';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message }); // Send error response if query fails
      return;
    }
    res.json(results); // Send the query results as JSON
  });
});

// Define a route to insert data into the database
app.post('/api/data', (req, res) => {
  const { name, email, message } = req.body; // Extract data from request body
  const query = 'INSERT INTO data (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message }); // Send error response if query fails
      return;
    }
    res.json({ id: result.insertId, name, email, message }); // Send success response with inserted data
  });
});

// Define a route to update data in the database
app.put('/api/data/:id', (req, res) => {
  const { id } = req.params; // Extract ID from request parameters
  const { name, email, message } = req.body; // Extract data from request body
  const query = 'UPDATE data SET name = ?, email = ?, message = ? WHERE id = ?';
  db.query(query, [name, email, message, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message }); // Send error response if query fails
      return;
    }
    res.json(result); // Send success response with update result
  });
});

// Define a route to delete data from the database
app.delete('/api/data/:id', (req, res) => {
  const { id } = req.params; // Extract ID from request parameters
  const query = 'DELETE FROM data WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message }); // Send error response if query fails
      return;
    }
    res.json(result); // Send success response with delete result
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
