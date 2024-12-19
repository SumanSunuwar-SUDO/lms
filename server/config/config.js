import { config } from "dotenv";
config();
export const databaseURI = process.env.MONGODB_URL;
