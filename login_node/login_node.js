const express =require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const jsonparser = bodyParser.json();
const app =express();

// mongoose model
const pat_data = require('../login_node/model/login_model')
// CORS POLICY
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type,Accept");

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();

});
// CORS POLICY

// mongoose connection
db_url="mongodb+srv://aish99:a123@aish-clu.ykyx0.mongodb.net/Hospital_Management?retryWrites=true&w=majority"
mongoose.connect(db_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongoose is connected");
})
// mongoose connection

// get API
app.get('/get_patList',(req,res)=>{
    pat_data.find().then(
        (result)=>{res.send(result)}
    )
})

// POST Api
app.post('/post_patList',jsonparser,(req,res)=>{
    const data = new pat_data(

        {
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            age: req.body.age,
            gender:req.body.gender,
            email: req.body.email,
            condition: req.body.condition,
            dept: req.body.dept,
            Location: req.body.Location,
            Contact: req.body.Contact,
            Gardian_name:req.body.Gardian_name,
            Gardian_no:req.body.Gardian_no,
            Dob: req.body.Dob,
            Doctor:req.body.Doctor,
            Bill: req.body.Bill,
            Bedno:req.body.Bedno,
            Medicine:req.body.Medicine,
        }
    )
    data.save().then(
        (result)=>{console.log("Data Saved")}
    ).catch((error)=>{console.log(error);})
})

// UPDATE API
app.put('',(req,res)=>{

})

// DELETE API
app.delete('/delete_patList/:id',(req,res)=>{
    pat_data.deleteOne(
        {_id:req.params.id}
    ).then(()=>{
        console.log("Data Deleted");
    }).catch((error)=>{
        console.log(error);
    })
})

// delete all data
app.delete("/deleteall/:id",(req,res)=>{
    pat_data.deleteMany({}).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
})
app.listen(3000,console.log('sever is running'))



