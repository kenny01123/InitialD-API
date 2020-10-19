import express = require('express');
import { AdvancedConsoleLogger, getRepository } from "typeorm";
import { Car } from "./src/entity/Car";
import {Request, Response} from "express";
import {createConnection} from "typeorm";


createConnection().then(connection => {
    // create and setup express app
    const app = express();
    app.use(express.json());
    app.use(express.static('public'));
    const carRepository = connection.getRepository(Car);

    // register routes
    app.get("/api/car", async function(req: Request, res: Response) {
        console.log(carRepository.find());
        const result= await carRepository.find();
        res.send(result);
    });

    app.get("/api/cars/:", async function(req: Request, res: Response) {
        console.log(carRepository.find());
        const result= await carRepository.find();
        res.send(result);
    });

    // start express server
    app.listen(3000, ()=> {console.log("server listening at port 3000")});
});