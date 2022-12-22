import List from '../database/todoDoc/todoList/list.schema'
import BoardModel from '../database/model/todos/board/board.model'

export default class Board {
  _boardId: string | null = null

  constructor(boardId: string) {
    this._boardId = boardId
  }

    /**
   * Execute command
   */
  executeCommand(commandStr: string) {
    if (!commandStr.length) {
      return false
    }

    const command: Command = new Command(commandStr),
      { cmd, listIndex } = command
    let board, todoList
    
    if (this._boardId) {
      board = new Board(this._boardId)
      if (!isNaN(listIndex)) {
        todoList = new TodoList(listIndex)

        switch (cmd) {
          case COMMAND.CMD_INSERT:
            return InsertCommand(this._workspaceModel, board, todoList, command)
            break
          case COMMAND.CMD_UPDATE:
            return UpdateCommand(this._workspaceModel, board, todoList, command)
            break
          case COMMAND.CMD_DELETE:
            return DeleteCommand(this._workspaceModel, board, todoList, command)
            break
          default:
            break
        }
      } 
    }
  }
}