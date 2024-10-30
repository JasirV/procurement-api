const mongoose=require('mongoose')
const AuthoIncrement=require('mongoose-sequence')(mongoose)

const itemSchema=mongoose.Schema({
    itemNo:{type:Number,unique:true},
    itemName:{type:String,required:true},
    inventoryLocation:{type:String,required:true},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    supplier:{type:mongoose.Schema.Types.ObjectId,ref:"Supplier",required:true},
    sockeUnit:{type:String,enum:['Unit',"Kg","Litre"],required:true},
    unitPrice:{type:Number,required:true},
    itemImages:[{type:String}],
    status:{type:String,enum:["Enabled","Disabled"],default:"Enabled"}
})

const Item=mongoose.model("Item",itemSchema)
module.exports=Item