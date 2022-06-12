import mongoose, { Schema, Document, Model } from 'mongoose'

interface IItem {
  title: string,
  createdAt: string,
  editedAt: string,
  content: string
}

export default interface IItemDocument extends IItem, Document {  // methods
}

export default interface IItemModel extends Model<IItemDocument> {  //statics
  findById: (id: string) => Promise<void>
}

