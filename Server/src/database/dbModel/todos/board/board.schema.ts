import { Schema } from 'mongoose'

const board = new Schema({
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  title: { type: String, default: '' },
  workspaceId: {
    type: Schema.Types.ObjectId,
    ref: 'Workspace'
  },
  todoList: [{
    type: Schema.Types.ObjectId,
    ref: 'TodoList'
  }]
})

// board.index({})

export default board