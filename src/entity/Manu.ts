import {Entity, PrimaryGeneratedColumn, Column , PrimaryColumn} from "typeorm";

@Entity()
export class Manufacturer {
    @PrimaryColumn()
    name: string;
}

export default Manufacturer