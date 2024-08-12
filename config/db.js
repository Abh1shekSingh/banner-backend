import mysql from "mysql2"

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Mbulance108",
    database:"test"
})


export default db