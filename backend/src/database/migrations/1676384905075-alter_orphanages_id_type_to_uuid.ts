import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class alterOrphanagesIdTypeToUuid1676384905075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('images', 'orphanage_id');

        await queryRunner.dropColumn('orphanages', 'id');

        await queryRunner.addColumn(
            'orphanages',
            new TableColumn({
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
            }),
        );

        await queryRunner.addColumn(
            'images',
            new TableColumn({
                name: 'orphanage_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'images',
            new TableForeignKey({
                name: 'ImageOrphanage',
                columnNames: ['orphanage_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'orphanages',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('images', 'ImageOrphanage');

        await queryRunner.dropColumn('images', 'orphanage_id');

        await queryRunner.addColumn(
            'images',
            new TableColumn({
                name: 'orphanage_id',
                type: 'integer',
            }),
        );

        await queryRunner.dropColumn('orphanages', 'id');

        await queryRunner.addColumn(
            'orphanages',
            new TableColumn({
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            }),
        );

        await queryRunner.createForeignKey(
            'images',
            new TableForeignKey({
                name: 'ImageOrphanage',
                columnNames: ['orphanage_id'],
                referencedTableName: 'orphanages',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
    }
}
