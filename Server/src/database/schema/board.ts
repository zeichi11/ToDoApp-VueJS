import mongoose, { Schema } from 'mongoose'

const todoDoc = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'TodoDoc',
    required: true
  }
})

const board = new Schema({
  _id: Schema.Types.ObjectId,
  uId: { type: String, required: true },
  title: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  todoDocs: [ todoDoc ]
})

// board.index({})

export default mongoose.model('Board', board)