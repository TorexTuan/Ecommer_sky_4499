import { registerAs } from "@nestjs/config";
import Entities from "src/entities";

export default registerAs("database", () => ({
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT || 35432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: Entities,
  migrations: [`${__dirname}/../../migrations/*{.ts,.js}`],
  synchronize: process.env.NODE_EVIRONMENT == "development",
  logging: process.env.NODE_ENVIRONMENT == "development",
  migrationsTableName: "migration",
}));
