import {MigrationInterface, QueryRunner} from "typeorm";

export class newCarTable1603149057924 implements MigrationInterface {
    name = 'newCarTable1603149057924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "car" ("id" SERIAL NOT NULL, "manufacturer" character varying, "name" character varying, "model" character varying NOT NULL, "layout" character varying, "year" integer, "weight" integer, "engine" character varying, "power" integer, "torque" character varying, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "car"`);
    }

}
