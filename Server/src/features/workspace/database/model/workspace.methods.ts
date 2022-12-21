import { Document, Schema } from 'mongoose'
import { IBoard } from '../../../todos/database/model/board/board.type'
import { IWorkspaceDocument } from './workspace.type'

export async function getAllBoards(this: IWorkspaceDocument): Promise<IBoard[]> {
  return this.boards
}