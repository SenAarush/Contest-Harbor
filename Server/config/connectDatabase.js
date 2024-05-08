const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.connect(db).then(() => {
    console.log("Database connection successfull!")
}).catch((err) => console.log("Database connection unsuccessfull"))