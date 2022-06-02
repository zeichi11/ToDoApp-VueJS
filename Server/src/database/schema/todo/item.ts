import mongoose, { Schema }from 'mongoose'

const todoItem = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, default: '' },
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  content: { type: String, default: '' }
})

// todoItemSchema.index({})

export default mongoose.model('TodoItem', todoItem)