var express = require("express")
const fileUpload = require('express-fileupload');
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app = express()

app.use(fileUpload());
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var shift = req.body.shift;
    var name = req.body.name;
    var date = req.body.date;
    var sku = req.body.sku;
    var operator = req.body.operator;
    var SpareParts = req.body.SpareParts;
    var whichpart = req.body.whichpart;
    var photo = req.body.photo;
    var why = req.body.why;

    var data = {
        "shift":shift,
        "name": name,
        "date" : date,
        "sku": sku,
        "operator" : operator,
        "SpareParts":SpareParts,
        "whichpart":whichpart,
        "photo":req.files.photo,
        "why":why
    }

    photo = req.files.photo;
    uploadPath = __dirname + '/public/uploads/' + photo.name;
  
    // Use the mv() method to place the file somewhere on your server
    photo.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).send(err);
    });

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('Norden1.html');
}).listen(5000);


console.log("Listening on PORT 5000");