import { model } from 'mongoose'
import { IResourceImgDocument } from './image.type'
import ResourceImageSchema from './image.schema'

//export default mongoose.model<IBoardDocument>('ResourceImg', ResourceImageSchema)
export default model<IResourceImgDocument>('ResourceImg', ResourceImageSchema)