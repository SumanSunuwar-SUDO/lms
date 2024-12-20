import { config } from "dotenv";

config();
export const databaseURI = process.env.MONGODB_URL;
export const secretKey = process.env.SECRET_KEY;
export const email = process.env.EMAIL_ADDRESS;
export const password = process.env.EMAIL_APP_PASSWORD;
