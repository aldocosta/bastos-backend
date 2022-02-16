import {MigrationInterface, QueryRunner} from "typeorm";

export class Categoria1641765250134 implements MigrationInterface {
    name = 'Categoria1641765250134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "name" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "name" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "name" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "name" nvarchar(255)`);
    }

}
