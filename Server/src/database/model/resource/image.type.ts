import { Document, Model } from 'mongoose'

export interface IResourceImg {
  src: string,
  width: string,
  height: string
}

// methods
export interface IResourceImgDocument extends IResourceImg, Document {}

// static
export interface IResourceImgModel extends Model<IResourceImgDocument> {}

