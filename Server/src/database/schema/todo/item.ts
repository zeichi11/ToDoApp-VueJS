import mongoose from 'mongoose'

const todoItemSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: { type: String, default: '' },
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  content: { type: String, default: '' }
})

// todoItemSchema.index({})

export default todoItemSchema;