import WorkspaceModel from '../dbModel/todos/workspace/workspace.model'

export default {
  create: async function (title: string) {
    const date: string = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '')
    const workspace = new WorkspaceModel({
      title,
      createdAt: date,
      boards: []
    })

    return await workspace.save()
  }
}