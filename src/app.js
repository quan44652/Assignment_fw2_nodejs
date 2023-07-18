import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerCategory from "./routers/category";

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/hoanghamobile");

app.use("/api", routerCategory);

export const viteNodeApp = app;
