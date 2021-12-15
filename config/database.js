// import sequelize
import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize("sql6459260", "sql6459260", "XGwK7CsPYE", {
  host: "sql6.freemysqlhosting.net",
  dialect: "mysql",
});

// export connection
export default db;
