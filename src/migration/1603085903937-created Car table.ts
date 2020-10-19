import {MigrationInterface, QueryRunner} from "typeorm";

export class createdCarTable1603085903937 implements MigrationInterface {
    name = 'createdCarTable1603085903937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "car" ("id" SERIAL NOT NULL, "manufacturer" character varying NOT NULL, "name" character varying NOT NULL, "model" character varying NOT NULL, "year" integer NOT NULL, "weight" integer NOT NULL, "engine" character varying NOT NULL, "power" integer NOT NULL, "torque" integer NOT NULL, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "car"`);
        await queryRunner.query(`DROP TABLE "user"`);

    }

}
