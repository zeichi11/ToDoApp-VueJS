import { Document, Schema } from 'mongoose'
import { IBoard } from '../board/board.type'
import { IWorkspaceDocument } from './workspace.type'

export async function getAllBoards(this: IWorkspaceDocument): Promise<IBoard[]> {
  return this.boards
}