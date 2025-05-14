const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express();
const port=5000;

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/QRgenerator",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=>console.log("mongodb connected"))
.catch((err)=>console.error("mongodb error",err))

const useroutes =require("./route/userroute")
app.use("/api/users",useroutes)

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})