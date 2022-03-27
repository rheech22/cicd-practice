import express from 'express';

const app = express();

app.get('/hello', (req, res)=> {
  res.status(200).send('Hello World!!! 777');
});

app.listen(3000, () => {
  console.log('server is running');
})
