import mongoose from 'mongoose';
import TodoItemSchema from './item';

const todoListSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: { type: String, default: '' },
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  items: [ TodoItemSchema ]
})

// todoListSchema.index({})

export default todoListSchema