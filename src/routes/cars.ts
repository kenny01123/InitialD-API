import { Router } from "express";
import { getRepository } from "typeorm";
import { Car } from "../entity/Car";

export default function() {
  const router = Router();
  const CarRepository = getRepository(Car);

  // This endpoint should return all quotes in the database
  // It can take a query parameter 'authorName' to only show
  // quotes from that author
  router.get("/cars", async (req, res) => {
    // FIXME your code here
    const cars = await CarRepository.find();
    res.send(cars);
  });

  return router;
}