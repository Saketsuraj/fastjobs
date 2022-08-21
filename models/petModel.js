var mongoose  =  require('mongoose');  
   
var petSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
    type:{  
        type:String  
    }, 
    breed:{  
        type:String  
    },    
    age:{  
        type:Number  
    }
});  
   
module.exports = mongoose.model('pet',petSchema); 