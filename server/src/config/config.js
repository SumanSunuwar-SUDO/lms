import { config } from "dotenv";

config();
export const databaseURI = process.env.MONGODB_URL;
export const secretKey = process.env.SECRET_KEY;
