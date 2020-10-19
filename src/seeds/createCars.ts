import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Car } from "../entity/Car";
import carList from "./carSeed.js";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Car)
      .values(carList)
      .execute()
  }
}