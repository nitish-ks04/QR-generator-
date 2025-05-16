const express = require("express");
const routes = express.Router();
const { usertextQR, userurlQR } = require("../model/schema")

routes.post("/api/textqr", async (req, res) => {
    const { name, age, linkdin, git, qrdata } = req.body
    try {
        const newuser = usertextQR({ name, age, linkdin, git, qrdata })
        await newuser.save()
        res.status(200).json({ message: "done" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

routes.post("/urlqr", async (req, res) => {
    const { url, qrdata } = req.body;
    try {
        const newuser = userurlQR({ url, qrdata });
        await newuser.save();
        res.status(200).json({ message: "saved url" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

routes.get("/history",async(req,res)=>{
    try{
        const texthistory=await usertextQR.find()
        const urlhistory=await userurlQR.find()
        res.status(200).json({text:texthistory,url:urlhistory})
    }catch(err){
        res.status(500).json({message:"failed to join",error:err.message})
    }
})

module.exports = routes;