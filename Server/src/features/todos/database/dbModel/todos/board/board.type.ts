import { Document, Model } from 'mongoose'
import { IList } from '../todoList/list.type'

export interface IBoard {
  title: string,
  createdAt: string,
  editedAt: string,
  Lists: Array<IList>
}

// methods
export interface IBoardDocument extends IBoard, Document { }

// static
export interface IBoardModel extends Model<IBoardDocument> { }
