// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";

// Init express
const app = express();
const PORT = process.env.PORT || 3000
// use express json
app.use(express.json());
// use cors
app.use(cors());

// Testing database connection
try {
  await db.authenticate();
  console.log("Database telah tekoneksi");
} catch (error) {
  console.error("Tidak dapat mengakses database", error);
}

// use router
app.use(Router);

// listen on port
app.listen(PORT, () => console.log("Server jalan"));
