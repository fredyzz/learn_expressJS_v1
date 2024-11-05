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

app.get("/", (req, res, next) => {
  // console.log("Request received");
  // res.status(200);
  // res.json({ message: "Hello World!" })

  // Next is used to pass the error to the next controller, next is used in a controller only
  // when is an async function and an error occurs
  next(new Error("Something went wrong"));
});

app.get("/test", (req, res) => {
  res.json({ message: "Test message!" });
}
);

app.use("/api", protectMiddleware, router);

app.post('/user', createNewUser)
app.post('/signin', signin)

// Error handling middleware
app.use((err, req, res, next) => {
  if(err.type === 'auth') {
    return res.status(401).json({ message: 'Unauthorized' });
  } else if(err.type === 'input') {
    return res.status(400).json({ message: 'Invalid input' });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
 
})

export default app;
