import express from "express";
import { PORT } from "./config";
import cors from "cors";
import { activationMailHandler } from "./utils/mailHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from test server!");
});

app.get("/send", (req, res) => {
  const mail = "pictkabandar69@gmail.com";
  const pass = "1234";
  activationMailHandler(mail, pass);
  res.send("Email sent successfully!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
