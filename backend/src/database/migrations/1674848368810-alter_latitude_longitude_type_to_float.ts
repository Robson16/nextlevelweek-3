import { MigrationInterface, QueryRunner } from "typeorm";

export class alterLatitudeLongitudeTypeToFloat1674848368810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE orphanages ALTER COLUMN latitude TYPE float8`);

        await queryRunner.query(`ALTER TABLE orphanages ALTER COLUMN longitude TYPE float8`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE orphanages ALTER COLUMN latitude TYPE decimal`);

        await queryRunner.query(`ALTER TABLE orphanages ALTER COLUMN longitude TYPE decimal`);
    }

}
