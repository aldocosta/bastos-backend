import {MigrationInterface, QueryRunner} from "typeorm";

export class Categoria_1641765430771 implements MigrationInterface {
    name = 'Categoria_1641765430771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Categoria" ("id" int NOT NULL IDENTITY(1,1), "nm_categoria" nvarchar(255) NOT NULL, CONSTRAINT "PK_62148aceba1dbfe1c5caa3493dc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Categoria"`);
    }

}
