"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_setup_1 = require("./src/db/db_setup");
const express = require("express");
const bodyParser = require("body-parser");
const usecaseRoutes_1 = require("./src/routes/usecaseRoutes");
const userRoutes_1 = require("./src/routes/userRoutes");
const clientRouter_1 = require("./src/routes/clientRouter");
const app = express();
const port = 5001;
// const mongodb_url =
//   'mongodb+srv://idolev:il2407@supportplatformdb.tcdb8n4.mongodb.net/';
app.use(bodyParser.json());
app.use('/users', userRoutes_1.default);
app.use('/usecase', usecaseRoutes_1.default);
app.use('/clients', clientRouter_1.default);
(0, db_setup_1.setupTables)();
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
//# sourceMappingURL=app.js.map