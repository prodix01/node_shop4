const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

   id : {
       type : {String, Number},
       required : true
   },
   password : {
       type : {String, Number},
       required : true
   },
   createdAt : {
       type : Date,
       default : Date.now
   }

});

module.exports = mongoose.model("user", userSchema);