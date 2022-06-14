import List from '../database/todoDoc/todoList/list.schema'
import BoardModel from '../database/dbModel/todos/board/board.model'

export default class Board {
  _boardId: string | null = null

  constructor(boardId: string) {
    this._boardId = boardId
  }

  async addList(id, title, createdAt) {
    const list = new List({
      _id: id,
      title,
      createdAt
    })
    await list.save().catch(() => {
      console.log('add list to db error')
    })
  }

  deleteList () {
  
  }

  renameList () {

  }

  addTodoList(boardId, listTitle) {

  }

  removeTodoList(boardId, listIndex) {

  }

  moveTodoList(boardId, listIndex, toIndex) {

  }

  addListItem(boardId, listIndex, itemTitle, content) {

  }

  removeListItem(boardId, listIndex, itemIndex) {

  }

  updateListItem(boardId, listIndex) {
    
  }
}