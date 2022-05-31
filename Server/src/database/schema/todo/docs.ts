import mongoose from 'mongoose';
import TodoListSchema from './list';

const todoDocsSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, required: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  todoList: [ TodoListSchema ]
})

// todoDocsSchema.index({})

export default todoDocsSchema