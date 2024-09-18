import mongoose, { mongo } from "mongoose";

export default async function conectDb(){
    mongoose.connect("mongodb+srv://vitorfd:g2RHBUmIjYdh8ulW@cluster0.htil9.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}