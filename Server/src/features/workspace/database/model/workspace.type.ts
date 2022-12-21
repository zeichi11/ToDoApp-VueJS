import { Document, Model } from 'mongoose'
import { IBoard } from '../../../../todos/database/model/board/board.type'

export interface IWorkspace {
  title: string,
  createdAt: Date,
  boards: Array<IBoard>
}

// methods
export interface IWorkspaceDocument extends IWorkspace, Document {
  getAllBoards: () => Promise<IBoard[]>
}

export interface IWorkspaceModel extends Model<IWorkspaceDocument> {
  // findWorkspaceById: (this: IWorkspaceModel, workspaceId: string) => Promise<IWorkspaceDocument>
  findWorkspaceById: (this: IWorkspaceModel, workspaceId: string) => Promise<IWorkspaceDocument>
}
