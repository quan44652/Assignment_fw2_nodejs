import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerAuth from "./routers/auth";

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/we17302");
app.use("/api", routerAuth);

export const viteNodeApp = app;
