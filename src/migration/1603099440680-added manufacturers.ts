import {MigrationInterface, QueryRunner} from "typeorm";

export class addedManufacturers1603099440680 implements MigrationInterface {
    name = 'addedManufacturers1603099440680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manufacturer" ("name" character varying NOT NULL, CONSTRAINT "PK_a4687de45b74542072a2656b77d" PRIMARY KEY ("name"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "manufacturer"`);
    }

}
