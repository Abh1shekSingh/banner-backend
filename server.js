import express from "express"
import cors from 'cors'
import bannerRouter from "./routes/banner.route.js";

const app = express();


app.use(cors());


app.use(express.json())

app.use("/api", bannerRouter)


app.get("/",(req, res) => {
    res.json("Hello, This is the mysql database backend")
})


app.listen(8800, () => {
    console.log("Listenign the server")
})