// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Hewan = db.define(
  "hewan",
  {
    // Define attributes
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    namaSpesies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    umur: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);

// Export model Product
export default Hewan;
