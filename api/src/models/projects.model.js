import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        link:{
            type:String,
            trim:true
        },
        images:{
            type:Array,
            required:true,
            trim:true
        },
        tech:{
            type:Array,
            required:true,
            trim:true
        },
        type:{
            type:String,
            required:true,
            trim:true
        },
        destacado:{
            type:Boolean,
            default:false,
            trim:true
            }
        
      
       
},
{
    timestamps:true
})

export default mongoose.model('Project', projectSchema)