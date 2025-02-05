require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware to parse JSON body
app.use(express.json());

const jokesData = {
  jokes: [
    { id: 1, setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { id: 2, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
    { id: 3, setup: "Why don’t skeletons fight each other?", punchline: "They don’t have the guts." },
    { id: 4, setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
    { id: 5, setup: "Why couldn’t the bicycle stand up by itself?", punchline: "Because it was two-tired!" },
    { id: 6, setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { id: 7, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
    { id: 8, setup: "Why don’t skeletons fight each other?", punchline: "They don’t have the guts." },
    { id: 9, setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
    { id: 10, setup: "Why couldn’t the bicycle stand up by itself?", punchline: "Because it was two-tired!" }
  ]
};

// Middleware to add timestamp to request
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get('/', (req, res) => {
  res.send(`Hello World! Request received at ${req.requestTime}`);
});

app.get('/Jokes', (req, res) => {
  res.json(jokesData);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
