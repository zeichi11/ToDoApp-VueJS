import mongoose, { Schema } from 'mongoose'

const todoList = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'TodoList',
    required: true
  }
})

const todoDoc = new Schema({
  _id: Schema.Types.ObjectId,
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  title: { type: String, default: '' },
  todoList: [ todoList ]
})

// todoDoc.index({})

export default mongoose.model('TodoDoc', todoDoc)