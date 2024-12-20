const express = require("express"); //creating server
const mongoose = require("mongoose");  //database se bat krne ke liye
const cors = require("cors");  //  do port pe frontend,backend chal rha usme communication krne ke liye
const bcrypt = require("bcrypt");  //password ko encrypted form me store krane ke liye
const crypto = require("crypto");   //  decrypt krne ke liye password ko at time of login so match krwa paye
const nodemailer = require("nodemailer");  //otp email pe bhejne ke liye
const bodyParser = require("body-parser");  //request response ko understable bnane ke liye for system
const { MongoClient, ServerApiVersion } = require('mongodb'); // database


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '80mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


const mongoURI = 'mongodb://localhost:27017/Book_store';

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

const Book = require('./models/Books');
const User = require('./models/Books');
const Review = require('./models/Review');


const PORT =  3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});