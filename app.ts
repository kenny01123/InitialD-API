import express = require('express');
import { AdvancedConsoleLogger, getRepository } from "typeorm";
import { Car } from "./src/entity/Car";
import { Manufacturer } from "./src/entity/Manu";
import {Request, Response} from "express";
import {createConnection} from "typeorm";
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
import bodyParser = require ("body-parser");
import methodOverride = require("method-override");

createConnection().then(connection => {
    // create and setup express app
    const app = express();
    app.use(express.json());
    app.use(express.static('public'));
    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
    })); 
    app.use(methodOverride('_method'));
    const carRepository = connection.getRepository(Car);
    const manuRepository = connection.getRepository(Manufacturer);

    app.get("/api/cars", async function(req: Request, res: Response) {
        const result= await carRepository.find();
        if (req.query.first !== undefined && typeof Number(req.query.first) === "number"  ) {
            res.send(result.splice(0,Number(req.query.first)));
        } else {
            res.send(result);
        }
        res.end();

    });
    //retrieve list of all cars by a manufacturer
    app.get("/api/cars/:manufacturer", async function(req: Request, res: Response) {
        let brand = req.params.manufacturer.toLowerCase();
        brand= brand[0].toUpperCase()+ brand.slice(1);
        const result= await carRepository.find({where:{manufacturer: brand }});
        res.send(result);
    });

    //search car by model 
    app.get("/api/car/:model", async function(req: Request, res: Response) {
        if (req.params.model !== undefined) {
            const model=  req.params.model.toUpperCase();
            const result= await carRepository.find({where:{model:model}});
            res.send(result);
        } else {
            res.send("please enter model name")
        }
        res.end();

    });
    //list all (or first n) car manufacturers
    app.get("/api/manufacturers", async function(req: Request, res: Response) {
        const result= await manuRepository.find();
        if (req.query.first !== undefined && typeof Number(req.query.first) === "number"  ) {
            res.send(result.splice(0,Number(req.query.first)));
        } else {
            res.send(result);
        }
        res.end();
    });
    //add new Manufacturer
    app.post("/api/manufacturer/:name", async function(req: Request, res: Response) {
        const name = req.params.name;
        const newBrand = new Manufacturer ();
        newBrand.name=name;
        manuRepository.save(newBrand);
        res.send("added!")
    });
    //add new Car
    app.post("/api/car", async function(req: Request, res: Response) {
        if (req.query.model === undefined) res.send("for adding a car please specify the model name");
        const car = new Car();
        for (const key in req.query){
            car[key] = req.query[key];
        }
        await carRepository.save(car);
        res.send(car);
    });

    //patch
    app.patch("/api/car/:model", async function(req: Request, res: Response) {
        const model=req.params.model.toUpperCase();
        const target = await carRepository.findOne({model:model})
        for (const key in req.query){
            target[key] = req.query[key];
        }
        await carRepository.save(target);
        res.send(target);
    });

    app.delete("/api/car/:model", async function(req: Request, res: Response) {
        const model=req.params.model.toUpperCase();
        const target = await carRepository.findOne({model:model})
        await carRepository.delete(target.id);
        res.send("deleted!")
    });

    // start express server
    app.listen(3000, ()=> {console.log("server listening at port 3000")});
});