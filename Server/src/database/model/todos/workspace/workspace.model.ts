import { model } from 'mongoose'
import { IWorkspaceDocument } from './workspace.type'
import workspaceSchema from './workspace.schema'

//export default mongoose.model<IWorkspaceDocument>('Workspace', workspaceSchema)
export default model<IWorkspaceDocument>('Workspace', workspaceSchema)