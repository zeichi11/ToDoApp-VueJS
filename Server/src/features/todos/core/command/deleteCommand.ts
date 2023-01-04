import Command from './command'
import ActionCommand from '../../action/actionCommand'
import { COMMAND } from '../../common/constants'

import Board from '../receiver/board'
import TodoList from '../receiver/todoList'
import TodoItem from '../receiver/todoItem'

export default class DeleteCommand extends Command {
  constructor(actionCommand: ActionCommand) {
    super(actionCommand)
  }

  execute () {
    if (!this._actionCommand || !this._type || !this._value) {
      return false
    }

    try {
      switch (this._type) {
        case COMMAND.TYPE_BOARD:
          Board.delete()
          break
        case COMMAND.TYPE_TODO_LIST:
          TodoList.delete()
          break
        case COMMAND.TYPE_TODO_ITEM:
          TodoItem.delete()
          break
      }
    } catch (e) {
      console.error(`[Todo-Server: DeleteCommand] ${this._actionCommand.toString()}`)
      return false
    }
    
    return true
  }
}