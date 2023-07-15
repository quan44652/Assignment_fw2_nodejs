import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerProduct from "./routers/product";
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/hoanghamobile");
app.use("/api", routerProduct);
app.use((req, res) => {
  return res.send("hello world");
});

export const viteNodeApp = app;
