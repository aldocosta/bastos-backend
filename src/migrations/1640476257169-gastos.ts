import {MigrationInterface, QueryRunner} from "typeorm";

export class gastos1640476257169 implements MigrationInterface {
    name = 'gastos1640476257169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Gastos" ("id" int NOT NULL IDENTITY(1,1), "nm_gasto" nvarchar(255) NOT NULL, "mes" nvarchar(255) NOT NULL, "ano" int NOT NULL, "userId" int, CONSTRAINT "PK_2ddc3f2d8b4a9aea5b9322d8ad4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Gastos" ADD CONSTRAINT "FK_9da3899b821d9c72075c2e28952" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Gastos" DROP CONSTRAINT "FK_9da3899b821d9c72075c2e28952"`);
        await queryRunner.query(`DROP TABLE "Gastos"`);
    }

}
