import { DataSource } from "typeorm";
import { User } from "../models/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database:", err));
