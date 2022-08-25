import { Document, Model } from 'mongoose'
import { IItem } from '../todoItem/item.type'

export interface IList {
  title: string,
  createdAt: string,
  editedAt: string,
  items: Array<IItem>
}

// methods
export interface IListDocument extends IList, Document {}

// static
export interface IListModel extends Model<IListDocument> {}

