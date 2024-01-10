import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('connected mongo db');
    })
    .catch((e) => {
        console.log(e);
    });

const app = express();

app.listen(3000, (err, res) => {
    console.log("listening with port 3000");
})
