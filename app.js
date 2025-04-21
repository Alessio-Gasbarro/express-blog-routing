// BASIC Express.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// ROUTER
const postsRouter = require('./routers/posts');
app.use('/posts', postsRouter);

// BASE ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// PORT
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});