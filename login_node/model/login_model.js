const mongoose = require('mongoose')

let pateintsListSchema = new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name: String,
        age: Number,
        gender:String,
        email: String,
        condition: String,
        dept: String,
        Location: String,
        Contact: Number,
        Gardian_name:String,
        Gardian_no:Number,
        Dob: String,
        Doctor:String,
        Bill: Number,
        Bedno:Number,
        Medicine:String 
    })
 module.exports =mongoose.model("pateints_lists",pateintsListSchema)