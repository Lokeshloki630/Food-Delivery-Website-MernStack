import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://vtu20903:lokeshlucky@cluster0.p2wwo.mongodb.net/food-delivery-app').then(()=>console.log("DB Connected"));
   
}


