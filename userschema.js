const mongoose = require ('mongoose');
const thalaivar = new mongoose.Schema(
    {
      username: {type:String, required: true,unique:true},
      email:{type:String, required: true, unique:true},
      password:{type:String , required:true},   
      role:{type:String, default:[]}
      
    }
)
module.exports = mongoose.model('thalaivar',thalaivar);

