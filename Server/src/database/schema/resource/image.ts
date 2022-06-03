import mongoose, { Schema }from 'mongoose'

export default new Schema({
  src: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true }
})