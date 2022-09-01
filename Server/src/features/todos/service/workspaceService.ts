import Workspace from '../dbModel/todos/workspace/workspace.model'
import BoardController from './boardService'

async function _createWorkspace(title: string) {
  const date: string = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '')
  const workspace = new Workspace({
    title,
    createdAt: date,
    boards: []
  })
  return await workspace.save()
}

async function _getWorkspace (workspaceId: string) {
  const workspace = await Workspace.findById(workspaceId)
  return workspace
}

async function _removeWorkspace (workspaceId: string) {
  const result = await Workspace.findByIdAndRemove(workspaceId)
  return result
}

export default {
  createWorkspace: function (userId: string, title: string) {
    const promise = _createWorkspace(title)
    promise.then((doc) => {
      const workspaceId = doc._id
      BoardController.createBoard(workspaceId, 'New Board')
    })
  },

  getWorkspace: function (userId: string, workspaceId) {
    const result = _getWorkspace(workspaceId)
    return result;
  }

    /**
   * TodoList를 삭제한다.
   */
  removeWorkspace: async function (listId: Schema.Types.ObjectId) {
    return await Workspace.remove({ _id: listId })
  },




  // createWorkspace: async function (title: string) {
  //   const date: string = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '')
  //   const workspace = new Workspace({
  //     title,
  //     createdAt: date,
  //     boards: []
  //   })

  //   return await workspace.save()
  // },

  // // removeWorkspace: async function (user) {

  // // }

  // getAllBoard: async function (workspaceId: string) {
  //   let workspace
  //   try {
  //     workspace = Workspace.findById(workspaceId)
  //   } catch (e: any) {
  //     console.error(e.message)
  //   }
  //   if (workspace) {
  //       return workspace.getAllBoard()
  //   }
  //   return []
  // }

  // createBoard: async function (workspaceId: string, title: string) {
  //   const date: string = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '')
  //   const board = new Board({
  //     title,
  //     workspaceId,
  //     createdAt: date,
  //     todoList: []
  //   })

  //   return await board.save()
  // },

  // removeBoard: async function (boardId: string, callback: function) {
  //   try {
  //     Board.remove({ _id: boardId }, callback)
  //   } catch (e: any) {
  //     console.error(e.message)
  //   }
  // },

  // changeBoardOrder: async function (boardId: string, orderList: Array<string>, callback: function) {
  //   try {
  //     Board.updateOne({ _id: boardId }, {
  //       $set: {
  //         todoList: orderList
  //       }
  //     }, callback)
  //   }
  // },

  // getBoardById: async function (boardId: string) {
  //   try {
  //     const board = Board.findById(boardId)
  //     return board || null
  //   } catch (e: any) {
  //     console.error(e.message)
  //   }
  // },

  // getAllTodoList: async function (boardId: string) {
  //   try {
  //     const board = Board.findById(boardId)
  //     return board.getAllList()
  //   } catch (e: any) {
  //     console.error(e.message)
  //   }
  // }
}