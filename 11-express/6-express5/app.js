import express from 'express';
import fsAsync from 'fs/promises';
// require('express-async-errors'); //CommonJS module
import {} from 'express-async-errors';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {});

app.get('/file2', (req, res, next) => {
  return fsAsync.readFile('/file.txt');
});

app.get('/file3', async (req, res) => {
  const data = await fsAsync.readFile('/file.txt');
});
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
