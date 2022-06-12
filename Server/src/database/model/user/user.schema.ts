import { Schema } from 'mongoose'
import resourceImageSchema from '../resource/image.schema'

const user = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, trim: true },
  nickname: String,
  birth: { type: Date, default: Date.now },
  profile_image: resourceImageSchema
})

// userSchema.index({})

export default user