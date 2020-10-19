import {MigrationInterface, QueryRunner} from "typeorm";

export class dropDefaultTable1603086235420 implements MigrationInterface {
    name = 'dropDefaultTable1603086235420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "year" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "weight" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "engine" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "power" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "torque" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "torque" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "power" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "engine" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "weight" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "year" SET NOT NULL`);
    }

}
