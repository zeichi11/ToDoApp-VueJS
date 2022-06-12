import { model } from 'mongoose'
import { IListDocument } from './list.type'
import TodoListSchema from './list.schema'

//export default mongoose.model<IListDocument>('TodoItem', TodoListSchema)
export default model<IListDocument>('TodoItem', TodoListSchema)