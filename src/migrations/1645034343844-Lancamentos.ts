import {MigrationInterface, QueryRunner} from "typeorm";

export class Lancamentos1645034343844 implements MigrationInterface {
    name = 'Lancamentos1645034343844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Lancamento" ("id" int NOT NULL IDENTITY(1,1), "nm_lancamento_gasto" nvarchar(255) NOT NULL, "data_pagto" datetime NOT NULL, "valor" int NOT NULL, "gastoId" int, CONSTRAINT "PK_5de3d1aec779491c2b6eeec0860" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Lancamento" ADD CONSTRAINT "FK_d46e81b790496f147360abf2359" FOREIGN KEY ("gastoId") REFERENCES "Gastos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lancamento" DROP CONSTRAINT "FK_d46e81b790496f147360abf2359"`);
        await queryRunner.query(`DROP TABLE "Lancamento"`);
    }

}
