import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Manufacturer } from "../entity/Manu";
import { Car } from "../entity/Car";

import carList from "./carSeed.json";
import manuList from "./manuSeed.json";


export default class CreateCars implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Manufacturer)
      .values(manuList)
      .execute()
  }
}

//power is bhp @ 6000 rpm
//torque is  lb.ft @ 5200 rpm


//     Toyota
// LEVIN SR (AE85)
// MR2 G-Limited (SW20)
// Altezza RS-200 Z Edition (SXE10) (Replaced Altezza RS200)*
//     Mitsubishi Motors
// Lancer Evolution IX GSR (CT9A) (New car)
//     Nissan
// Silvia K's (S13)
// Silvia Q's (S14)
// Silvia Spec-R (S15)
//     Mazda
// RX-8 Type S (SE3P)*
// Eunos Roadster (NA6CE)* (replaced Roadster S-Special)
//     Honda
// Civic SiR II (EG6)
//     Subaru
// Impreza WRX STi Version V Type R (GC8V)
// Impreza WRX STi (GDBF) (New car)
//     Suzuki
// Suzuki Cappuccino (EA11R)