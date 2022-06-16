import { Schema } from 'mongoose'
import { ITodoListDocument, ITodoListModel } from './workspace.type'

export async function findById(this: ITodoListModel, workspaceId: string): Promise<ITodoListDocument> {
  const found = await this.findOne({ workspaceId })
  if (found) {
    return found
  } else {
    return this.create({ workspaceId })
  }
}