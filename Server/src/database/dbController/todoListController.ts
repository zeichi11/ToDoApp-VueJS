import TodoList from '../dbModel/todos/todoList/list.model'
import TodoItem from '../dbModel/todos/todoItem/item.model'

export default {
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

  removeList: async function () {
    
  },


}