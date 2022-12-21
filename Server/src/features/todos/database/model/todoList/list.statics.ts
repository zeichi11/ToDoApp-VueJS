import { Schema } from 'mongoose'
import { IListDocument, IListModel } from './list.type'

export async function findById(this: IListModel, workspaceId: string): Promise<IListDocument> {
  const found = await this.findOne({ workspaceId })
  if (found) {
    return found
  } else {
    return this.create({ workspaceId })
  }
}