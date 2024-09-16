import express from "express"
import  mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/userRoutes.js"


const app=express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 3000
const URL = process.env.MONGO_URL

app.use("/api",router)

app.get("/",(req,res)=>{
    res.send("Server is running")
})

mongoose.connect(URL)
.then(()=> console.log("mongodb connected...."))
.catch((err)=>console.log(err));


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
});
