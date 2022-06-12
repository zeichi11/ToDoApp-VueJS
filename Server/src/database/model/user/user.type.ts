import { Document, Model } from 'mongoose'
import { IResourceImg } from '../resource/image.type'

export interface IUser {
  email: string,
  password: string,
  nickname: string,
  birth: string,
  profile_image: IResourceImg
}

// methods
export interface IUserDocument extends IUser, Document {}

// static
export interface IUserModel extends Model<IUserDocument> {}

