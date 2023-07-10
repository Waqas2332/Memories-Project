import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import PostRoutes from "./routes/posts.js";
import path from "path";

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
// app.use(multer({ storage: fileStorage }).single("selectedFile"));
app.use("/posts", PostRoutes);

const CONNECTION_URL =
  "mongodb+srv://wmunir232:wmunir232@task-manager.sf6auvh.mongodb.net/memories";

const PORT = process.env.PORT || 5000;

// { useNewUrlParser: true, useUnifiedTopology: true } These are optional but helps in removing unnecessary warnings from console

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
