import mongoose from 'mongoose';
import TodoDocsSchema from './todo/docs';

const boardSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  uId: { type: String, required: true },
  title: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  todoDocs: [ TodoDocsSchema ]
})

// boardSchema.index({})

export default boardSchema