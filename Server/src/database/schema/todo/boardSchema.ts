import mongoose, { Schema } from 'mongoose'

const todoList = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'TodoList',
    required: true
  }
})

const board = new Schema({
  _id: Schema.Types.ObjectId,
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  title: { type: String, default: '' },
  todoList: [ todoList ]
})

// board.index({})

export default mongoose.model('Board', board)