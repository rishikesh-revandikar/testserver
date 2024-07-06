import { config } from "dotenv";
config();

const PORT = process.env.PORT || 8080;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;
export { PORT, MAIL_USER, MAIL_PASS };
