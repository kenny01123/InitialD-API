import express = require('express');
import { Router } from "express";
import { getRepository } from "typeorm";
import { Car } from "entity/Car";
import {Request, Response} from "express";

// create and setup express app

const app = express();
app.use(express.json());
app.use(express.static('public'));


// register routes

app.get("/users", function(req: Request, res: Response) {
    // here we will have logic to return all users
    console.log("hi!");
    res.send("hi!");
});


// start express server


app.listen(3000, ()=> {
    console.log("listening at port 3000")
});