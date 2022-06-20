import { model } from 'mongoose'
import { IItemDocument, IItemModel } from './item.type'
import TodoItemSchema from './item.schema'

//export default mongoose.model<IItemDocument>('TodoItem', TodoItemSchema)
export default model<IItemDocument, IItemModel>('TodoItem', TodoItemSchema)