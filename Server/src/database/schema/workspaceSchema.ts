import mongoose, { Schema } from 'mongoose'

const board = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  }
})

const workspace: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  uId: { type: String, required: true },
  title: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  board: [ board ]
})

workspace.statics.getById()

// board.index({})

export default mongoose.model('Workspace', workspace)