const express = require('express');
const app = express();
const PORT = 3000;


// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routers
const moneyvalueRouter = require('./routes/moneyvalueRouter');
const treasureRouter = require('./routes/treasureRouter');
app.use('/api/moneyvalues', moneyvalueRouter);
app.use('/api/treasures', treasureRouter);

app.get('/', (req, res) => {
    res.json({ msg: 'Ping!'});
});

app.use((req, res) => {
  res.render('errors/404');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});