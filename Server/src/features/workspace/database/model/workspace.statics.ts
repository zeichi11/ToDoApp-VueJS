import { Schema, Model } from 'mongoose'
import { IWorkspaceDocument, IWorkspaceModel } from './workspace.type'

export async function findWorkspaceById(this: Model<IWorkspaceDocument>, workspaceId: string): Promise<IWorkspaceDocument> {
  const found = await this.findOne({ workspaceId })
  if (found) {
    return found
  } else {
    return await this.create({ workspaceId })
  }
}