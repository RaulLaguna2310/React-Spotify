import mongoose, { mongo } from "mongoose";

export default async function conectDb(){
    mongoose.connect("mongodb+srv://BancoTrem:<db_password>@spotify.zfk7f.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Spotify")

    return mongoose.connection
}