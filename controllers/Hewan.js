// Import model Hewan
import Hewan from "../models/Hewan.js";

// Get semua hewan
export const getHewan = async (req, res) => {
  try {
    const hewan = await Hewan.findAll();
    res.send(hewan);
  } catch (err) {
    console.log(err);
  }
};

export const startHewan = async (req, res) => {
  try {
    res.send("Welcome to our zoo pages");
  } catch (err) {
    console.log(err);
  }
};


// Get hewan berdasarkan id
export const getHewanById = async (req, res) => {
  try {
    const hewan = await Hewan.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(hewan[0]);
  } catch (err) {
    console.log(err);
  }
};

// Create hewan baru
export const createHewan = async (req, res) => {
  try {
    await Hewan.create(req.body);
    res.json({
      message: "Hewan telah dibuat",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update hewan berdasarkan id
export const updateHewan = async (req, res) => {
  try {
    await Hewan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Hewan telah diperbarui",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete hewan berdasarkan id
export const deleteHewan = async (req, res) => {
  try {
    await Hewan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product telah dihapus",
    });
  } catch (err) {
    console.log(err);
  }
};
