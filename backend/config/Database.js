import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', '', {
    host: "https://main.d2gxzppztx7e5x.amplifyapp.com/",
    dialect: "mysql"
});
 
export default db;