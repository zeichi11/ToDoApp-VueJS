import { Schema } from 'mongoose'

const board = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  }
})

const workspace: Schema = new Schema({
  // uId: { type: String, required: true },
  title: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  boards: [ board ]
})

// board.index({})

export default workspace