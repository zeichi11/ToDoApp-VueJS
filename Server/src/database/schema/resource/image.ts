import mongoose from 'mongoose'

export default new mongoose.Schema({
  src: String,
  width: Number,
  height: Number
})