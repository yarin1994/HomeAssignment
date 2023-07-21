import { setupTables } from './src/db/db_setup';

import { Application } from 'express';
import express = require('express');
import bodyParser = require('body-parser');
import usecaseRoutes from './src/routes/usecaseRoutes';
import userRouter from './src/routes/userRoutes';
import clientRouter from './src/routes/clientRouter';

const app: Application = express();
const port = 5001;
// const mongodb_url =
//   'mongodb+srv://idolev:il2407@supportplatformdb.tcdb8n4.mongodb.net/';

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/usecase', usecaseRoutes);
app.use('/clients', clientRouter);

setupTables();
app.listen(5001, () => {
  console.log('Server started on port 5001');
});
// mongoose
//   .connect(mongodb_url)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(port, () => {
//       console.log(`Server is listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB', error);
//   });
