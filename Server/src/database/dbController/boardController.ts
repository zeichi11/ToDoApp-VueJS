import Board from '../dbModel/todos/board/board.model'

export default {
  createBoard: async function (workspaceId: string, title: string) {
    const date: string = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '')
    const board = new Board({
      title,
      workspaceId,
      createdAt: date,
      todoList: []
    })

    return await board.save()
  }
}