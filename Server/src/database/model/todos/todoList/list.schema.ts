import mongoose, { Schema } from 'mongoose'

const todoItem = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'TodoItem',
    required: true
  }
})

const todoList = new Schema({
  title: { type: String, default: '' },
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  items: [ todoItem ]
})

// todoListSchema.index({})

export default todoList