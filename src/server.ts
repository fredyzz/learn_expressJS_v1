import express from "express";
import router from './router';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get("/", (req, res) => {
  console.log("Request received");
  res.status(200);
  res.json({ message: "Hello World!" });
});

app.use("/api", router);

export default app;
