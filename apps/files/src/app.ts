import express from "express";
import upload from "./upload";

const app = express();

// Middlewares
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use("/upload", upload);

app.get("/", (req, res) => {
  res.json({ message: "hello World" });
});

// 404 Handler
// app.use("*", () => {
//   throw new AppError({
//     message: "not found",
//     statusCode: 404,
//   });
// });

// Error handler
// app.use(ErrorHandler);

export default app;
