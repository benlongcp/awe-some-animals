import mongoose from 'mongoose'

const Schema = mongoose.Schema

const animalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  fate: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model('Animal', animalSchema)