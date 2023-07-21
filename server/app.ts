import { Application } from 'express';
import { setupTables } from './src/db/db_setup';
import express = require('express');
import bodyParser = require('body-parser');
import clientRouter from './src/routes/clientRouter';

const app: Application = express();
const port = 5001;

app.use(bodyParser.json());
app.use('/clients', clientRouter);

setupTables();
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
