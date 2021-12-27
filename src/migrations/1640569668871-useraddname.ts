import {MigrationInterface, QueryRunner} from "typeorm";

export class useraddname1640569668871 implements MigrationInterface {
    name = 'useraddname1640569668871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD "name" nvarchar(255) `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "name"`);
    }

}
