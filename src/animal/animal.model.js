import mongoose from "mongoose"

const animalSchema = mongoose.Schema({
    specie: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    breed: {
        type: String,
        required: false
    },
    birthdate: {
        type: String,
        required: false
    },
    keeper: {
        type
    }
})