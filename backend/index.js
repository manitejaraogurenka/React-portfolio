import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("tiny"));

app.use(
  cors({
    origin: [
      "https://www.manitejaraogurenka.com",
      "https://manitejaraogurenkaapi.vercel.app/",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/hallo", (req, res) => {
  res.status(200).json({ message: "Hallo world" });
});

app.listen(8080, () => {
  console.log("App listening on port 8080!");
});
