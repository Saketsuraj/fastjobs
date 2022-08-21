var express = require('express');  
var mongoose = require('mongoose');  
var petModel    = require('./models/petModel');  
var bodyParser  = require('body-parser');  
const reader = require('xlsx');
const fs = require('fs'); 
var multer = require('multer');  
var storage = multer.diskStorage({  
destination:(req,file,cb)=>{  
cb(null,'./uploads');  
},  
filename:(req,file,cb)=>{  
cb(null,file.originalname);  
}  
});  
var upload = multer({storage:storage});  

//connect to db  
mongoose.connect('mongodb://localhost:27017/pets',{useNewUrlParser:true})  
.then(()=>console.log('connected to db'))  
.catch((err)=>console.log(err))  

//init app  
var app = express();  
//fetch data from the request  
app.use(bodyParser.urlencoded({extended:false}));   

let petRoute = require('./routes/pet.route')
app.use(petRoute)

// Upload excel file and import to mongodb
app.post('/api/pet', upload.single("file"), (req, res) =>{
    console.log(__dirname)
    console.log(__dirname + '/uploads/' + req.file.filename)
    let pets = importExcelDatatoMongoDB(__dirname + '/uploads/' + req.file.filename);
    res.json(pets)
});

// Import Excel File to MongoDB database
function importExcelDatatoMongoDB(filePath){
    var pets = []
    // Reading our test file
    const file = reader.readFile(filePath)
  
    const sheets = file.SheetNames
    
    for(let i = 0; i < sheets.length; i++)
    {
    const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
        pets.push(res)
    })
    }
    
    // Printing data
    console.log(pets)

petModel.insertMany(pets,(err,data)=>{  
if(err){  
console.log(err);  
}else{  
// res.redirect('/');  
console.log(data)
}  
}); 
fs.unlinkSync(filePath);
return pets;
}
//assign port  
var port = process.env.PORT || 4000;  
app.listen(port,()=>console.log('server run at port '+port));

module.exports = app