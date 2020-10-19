import {MigrationInterface, QueryRunner} from "typeorm";

export class changedCarTorqueToString1603094830203 implements MigrationInterface {
    name = 'changedCarTorqueToString1603094830203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "car" ("id" SERIAL NOT NULL, "manufacturer" character varying NOT NULL, "name" character varying NOT NULL, "model" character varying NOT NULL, "layout" character varying, "year" integer, "weight" integer, "engine" character varying, "power" integer, "torque" character varying, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "car"`);
    }

}
