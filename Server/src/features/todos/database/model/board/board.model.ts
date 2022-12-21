import { model } from 'mongoose'
import { IBoardDocument, IBoardModel } from './board.type'
import BoardSchema from './board.schema'

export default model<IBoardDocument, IBoardModel>('Board', BoardSchema)