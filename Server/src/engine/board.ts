import List from '../database/todoDoc/todoList/list.schema'
import Command from './command'
import { COMMAND } from '../common/constants'

export default class Board {
  _boardId: string | null = null

  constructor(boardId) {
    this._boardId = boardId
  }

  executeCommand(commandStr: string) {
    if (!commandStr.length) {
      return false
    }

    const command = new Command(commandStr)
    switch (command.getType()) {
      case COMMAND.INSERT:
        return this.doInsert(command)
        break
      case COMMAND.UPDATE:
        return this.doUpdate(command)
        break
      case COMMAND.DELETE:
        return this.doDelete(command)
        break
    }
  }

  doInsert(command) {

  }

  doUpdate(command) {

  }

  doDelete(command) {

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

  addItem () {

  }

  deleteItem () {

  }

  modifyItem () {

  }

  changeItemState () {

  }

  addBoard() {

  }

  removeBoard(boardId) {

  }

  setBoardTitle(boardId, boardTitle) {

  }

  moveBoard(boardId, fromIndex, toIndex) {

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