import { Schema } from 'mongoose'

const board = new Schema({
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  title: { type: String, default: '' },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'Workspace'
  },
  todoList: [{
    type: Schema.Types.ObjectId,
    ref: 'TodoList',
    required: true
  }]
})

// board.index({})

export default board