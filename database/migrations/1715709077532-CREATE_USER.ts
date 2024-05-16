import { MigrationInterface, QueryRunner } from "typeorm";

export class CREATEUSER1715709077532 implements MigrationInterface {
    name = 'CREATEUSER1715709077532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "confirmPassword" character varying NOT NULL, CONSTRAINT "UQ_9b998bada7cff93fcb953b0c37e" UNIQUE ("username"), CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE ("email"), CONSTRAINT "UQ_2938f63524060140bbc0dd20f78" UNIQUE ("password"), CONSTRAINT "UQ_e863acfc819f7af6574ef717394" UNIQUE ("confirmPassword"), CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
