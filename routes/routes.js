// Import express
import express from "express";
// Import Controller Hewan
import {
  getHewan,
  getHewanById,
  createHewan,
  updateHewan,
  deleteHewan,
} from "../controllers/Hewan.js";

// Init express router
const router = express.Router();

// Route get semua hewan
router.get("/hewan", getHewan);
// Route get hewan by id
router.get("/hewan/:id", getHewanById);
// Route create hewan baru
router.post("/hewan", createHewan);
// Route update product by id
router.put("/hewan/:id", updateHewan);
// Route delete product by id
router.delete("/hewan/:id", deleteHewan);

// export router
export default router;
