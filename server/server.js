// server/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to serve the EJS view
app.get('/', (req, res) => {
    res.render('home');
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
