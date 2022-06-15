import { Schema }from 'mongoose'

const todoItem = new Schema({
  title: { type: String, default: '' },
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  content: { type: String, default: '' },
  todoListId: {
    type: Schema.Types.ObjectId,
    ref: 'TodoList'
  }
})

// todoItemSchema.index({})

export default todoItem