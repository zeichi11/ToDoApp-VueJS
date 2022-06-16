import { Schema } from 'mongoose'
import { IWorkspaceDocument, IWorkspaceModel } from './workspace.type'

export async function findWorkspcaeById(this: IWorkspaceModel, workspaceId: string): Promise<IWorkspaceDocument> {
  const found = await this.findOne({ workspaceId })
  if (found) {
    return found
  } else {
    return this.create({ workspaceId })
  }
}