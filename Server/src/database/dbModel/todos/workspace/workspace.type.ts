import { Document, Model } from 'mongoose'
import { IBoard } from '../board/board.type'

export interface IWorkspace {
  title: string,
  createdAt: string,
  boards: Array<IBoard>
}

// methods
export interface IWorkspaceDocument extends IWorkspace, Document {
  getAllBoards: () => Promise<IBoard[]>
}

export interface IWorkspaceModel extends Model<IWorkspaceDocument> {
  findWorkspaceById: (this: Model<IWorkspaceDocument>, workspaceId: string) => Promise<IWorkspaceDocument>
}
