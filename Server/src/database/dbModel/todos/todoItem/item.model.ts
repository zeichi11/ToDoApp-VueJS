import { model } from 'mongoose'
import { IItemDocument } from './item.type'
import TodoItemSchema from './item.schema'

//export default mongoose.model<IItemDocument>('TodoItem', TodoItemSchema)
export default model<IItemDocument>('TodoItem', TodoItemSchema)