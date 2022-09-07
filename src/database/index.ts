import Connection from "./Connection";
import db from "../infra/config/database"

const mySqlConnection = new Connection(db.database, db.username, db.password, {
    dialect: "mysql",
    port: db.port,
    host: db.host
});

export { mySqlConnection };