import express from "express";
import {PORT, mongoDBURL} from './config.js';
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body 
app.use(express.json());

// Middleware for handling CORS Policy
// Option 1: Allow All Origins with default of cors(*);
app.use(cors());  

// Option 2: Allow Custom Origins (better option)
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// }));

//ROUTE
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to MERN Stack');
});

app.use('/books', booksRoute);

//SERVER
// app.listen(PORT, () => {
//   console.log(`App is listening to port: ${PORT}`);
// });

//DATABASE
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database.');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });