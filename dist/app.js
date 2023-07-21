"use strict";
// import { Application, Request, Response } from 'express';
// import express = require('express');
Object.defineProperty(exports, "__esModule", { value: true });
// import usecaseRoutes from './src/routes/usecaseRoutes';
// import userRouter from './src/routes/userRoutes'
// // Create Express server
// const app: Application = express();
// app.use('/users', userRouter);
// app.use('/usecase', usecaseRoutes)
// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
const mongoose_1 = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const usecaseRoutes_1 = require("./src/routes/usecaseRoutes");
const userRoutes_1 = require("./src/routes/userRoutes");
const app = express();
const port = 3000;
const mongodb_url = 'mongodb+srv://idolev:il2407@supportplatformdb.tcdb8n4.mongodb.net/';
app.use(bodyParser.json());
app.use('/users', userRoutes_1.default);
app.use('/usecase', usecaseRoutes_1.default);
mongoose_1.default
    .connect(mongodb_url)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})
    .catch((error) => {
    console.error('Error connecting to MongoDB', error);
});
//# sourceMappingURL=app.js.map