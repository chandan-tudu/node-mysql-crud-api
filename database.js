import mysql from "mysql2";

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_api",
});

export default connection.promise();
