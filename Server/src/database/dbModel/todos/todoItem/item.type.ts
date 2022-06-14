import { Document, Model } from 'mongoose'

export interface IItem {
  title: string,
  createdAt: string,
  editedAt: string,
  content: string
}

export interface IItemDocument extends IItem, Document { }

export interface IItemModel extends Model<IItemDocument> { }