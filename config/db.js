import dotenv from 'dotenv'
import mysql from "mysql2"
dotenv.config({
    path:'../env'
});
const db = mysql.createConnection({
    host:"bvvl5mfswi4szoonkcbi-mysql.services.clever-cloud.com",
    user:"ueha3uaiotb3byk2",
    password:"NcDq4NMKjwYSH6943tvS",
    database:"bvvl5mfswi4szoonkcbi"
})


export default db