const express = require('express');
const morgan = require('morgan'); //    is a loger
const helmet = require('helmet'); //    is adding and deleting some headers for security.
const cors = require('cors');

const middlewares = require('./middelwares');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World !',
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
