import Board from '../dbModel/todos/board/board.model'
import TodoListController from './todoListService'

async function _createBoard(workspaceId: string, title: string) {
  const date: string = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '')
  const board = new Board({
    title,
    workspaceId,
    createdAt: date,
    todoList: []
  })

  return await board.save()
}

export default {
  createBoard: function (workspaceId: string, title: string) {
    const promise = _createBoard(workspaceId, title)
    promise.then((doc) => {
      const boardId = doc._id
      // const workspace = Workspace.findWorkspaceById(workspaceId)
      TodoListController.createList(boardId, 'To do')
    })
  },

  removeBoard: function (boardId: string) {
    
  }
}