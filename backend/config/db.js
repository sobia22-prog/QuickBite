import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://sobiiii3265:soBia1267@cluster0.nuazd.mongodb.net/')).isObjectIdOrHexString(() =>
        console.log("DB Connected"));
}