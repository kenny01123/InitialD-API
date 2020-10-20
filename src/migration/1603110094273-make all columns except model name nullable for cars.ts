import {MigrationInterface, QueryRunner} from "typeorm";

export class makeAllColumnsExceptModelNameNullableForCars1603110094273 implements MigrationInterface {
    name = 'makeAllColumnsExceptModelNameNullableForCars1603110094273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "name" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "name" SET NOT NULL`);
    }

}
