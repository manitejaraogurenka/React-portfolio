import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();
connectDB();
app.use(morgan("tiny"));
app.disable("x-powered-by");
app.use(
  cors()
  //   {
  //   origin: [
  //     "https://www.manitejaraogurenka.com",
  //     "https://manitejaraogurenka.vercel.app/",
  //     "http://localhost:3000",
  //   ],
  //   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  //   allowedHeaders: ["Content-Type"],
  // }
);
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use("/", userRoutes);

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
