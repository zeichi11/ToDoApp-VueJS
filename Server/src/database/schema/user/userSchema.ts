import mongoose from 'mongoose'
import imageSchema from '../resource/imageSchema'

const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, trim: true },
  nickname: String,
  birth: { type: Date, default: Date.now },
  profile_image: imageSchema
})

// userSchema.index({})

export default userSchema