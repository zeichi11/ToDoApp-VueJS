import { Schema } from 'mongoose'
import { getAllBoards } from './workspace.methods'
import { findById } from './workspace.statics'

const workspaceSchema: Schema = new Schema({
  // uId: { type: String, required: true },
  title: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  boards: [{
    type: Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  }]
})

workspaceSchema.statics.findById = findById
workspaceSchema.methods.getAllBoards = getAllBoards

// board.index({})

export default workspaceSchema