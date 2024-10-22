import express from "express";
import router from './router';
import morgan from 'morgan';
import cors from 'cors';

import customLogger from "./middlewares/customLogger";
import { protectMiddleware } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example of custom middleware
app.use(customLogger("Server"));

app.get("/", (req, res) => {
  console.log("Request received");
  res.status(200);
  res.json({ message: "Hello World!" });
});

app.use("/api", protectMiddleware, router);

app.post('/user', createNewUser)
app.post('/signin', signin)

export default app;
