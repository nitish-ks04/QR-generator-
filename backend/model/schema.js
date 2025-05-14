const mongoose=require("mongoose")

const useschema=new mongoose.Schema({
    name:String,
    age:Number,
    linkdin:String,
    git:String,
    qrdata:String
})

const useschemaurl=new mongoose.Schema({
    url:String,
    qrdata:String
})

const usertextQR = mongoose.model("usertextQR", useschema);
const userurlQR = mongoose.model("userurlQR", useschemaurl);

module.exports = { usertextQR, userurlQR };