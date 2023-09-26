import mongoose from "mongoose";

export const conectDB = async()=>{
    
    try{
        await mongoose.connect('mongodb://127.0.0.1/merndb');
        console.log('>>>Db is conected')
    }catch(err){
    console.error(err);
    }
    }