import mongoose, { Schema, Document, Model } from 'mongoose'

interface IList {
  title: string,
  createdAt: string,
  editedAt: string
  items: Array<todoItemType>
}

interface IListDocument extends IList, Document {
  addItem: (item: Item) => Promise<void>
  editTitle: (title: string) => Promise<void>
}

interface IListModel extends Model<IListDocument> {
  findById: (id: string) => Promise<void>
}

