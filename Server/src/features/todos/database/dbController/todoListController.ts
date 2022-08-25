import TodoList from '../dbModel/todos/todoList/list.model'
import TodoItem from '../dbModel/todos/todoItem/item.model'
import { Schema } from 'mongoose'

export default {
  /**
   * TodoList를 생성한.
   */
  createList: async function (boardId: string, title: string) {
    const date: string = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '')
    const todoList = new TodoList({
      title,
      boardId,
      createdAt: date,
      items: []
    })

    return await todoList.save()
  },

  /**
   * TodoList를 삭제한다.
   */
  removeList: async function (listId: Schema.Types.ObjectId) {
    return await TodoList.remove({ _id: listId })
  },

  /**
   * 특정 boardId의 TodoList를 모두 삭제한다.
   */
  removeAllListByBoardId: async function(boardId: Schema.Types.ObjectId) {
    return await TodoList.deleteMany({ boardId })
  }
}