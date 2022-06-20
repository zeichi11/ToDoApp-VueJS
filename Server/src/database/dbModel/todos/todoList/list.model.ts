import { model } from 'mongoose'
import { IListDocument, IListModel } from './list.type'
import TodoListSchema from './list.schema'

//export default mongoose.model<IListDocument>('TodoItem', TodoListSchema)
export default model<IListDocument, IListModel>('TodoItem', TodoListSchema)