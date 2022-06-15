import { Schema } from 'mongoose'

const todoList = new Schema({
  title: { type: String, default: '' },
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'Board'
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'TodoItem',
    required: true
  }]
})

// todoListSchema.index({})

export default todoList