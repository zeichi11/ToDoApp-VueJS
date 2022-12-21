import { model } from 'mongoose'
import { IWorkspaceDocument, IWorkspaceModel } from './workspace.type'
import workspaceSchema from './workspace.schema'

// Property 'findWorkspaceById' does not exist on type 'Model<IWorkspaceDocument, {}, {}, {}>'
// statics에 선언한 함수가 위와 같은 내용의 오류로 찾을 수 없는 문제를 해결하기 위해서는 아래와 같이
// Document와 Model 타입을 모두 지정해줘야한다.
export default model<IWorkspaceDocument, IWorkspaceModel>('Workspace', workspaceSchema)