import { model } from 'mongoose'
import { IBoardDocument } from './board.type'
import BoardSchema from './board.schema'

//export default mongoose.model<IBoardDocument>('Board', BoardSchema)
export default model<IBoardDocument>('Board', BoardSchema)