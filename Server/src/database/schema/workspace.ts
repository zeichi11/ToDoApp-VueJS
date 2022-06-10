import mongoose, { Schema } from 'mongoose'

const board = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  }
})

const workspace = new Schema({
  _id: Schema.Types.ObjectId,
  uId: { type: String, required: true },
  title: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  board: [ board ]
})

// board.index({})

export default mongoose.model('Workspace', workspace)