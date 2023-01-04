import Command from '../../todos/core/command/command'
import InsertCommand from '../../todos/core/command/insertCommand'
import UpdateCommand from '../../todos/core/command/updateCommand'
import DeleteCommand from '../../todos/core/command/deleteCommand'
import Board from '../../todos/core/receiver/board'
import TodoList from '../../todos/core/receiver/todoList'
import { COMMAND } from '../../todos/common/constants'
import WorkspaceModel from '../../todos/database/model/todos/workspace/workspace.model'

export default class Workspace {
  _workspaceId: string | null = null
  _workspaceModel: WorkspaceModel | null = null
  _boardId: string | null = null
  _board: Board | null = null

  constructor(workspaceId: string, boardId: string) {
    this._workspaceId = workspaceId
    this._boardId = boardId
    this._workspaceModel = new WorkspaceModel()
  }

  /**
   * open
   */
  open() {
    try {
      this._board = new Board(this._boardId)
      console.log('open')
    } catch (e: any) {
      console.error(e.message)
    }
  }

  /**
   * save
   */
  save() {
    console.log('save')
  }

  /**
   * close
   */
  close() {
    this._board = null
    console.log('close')
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

  addBoard() {
    
  }

  removeBoard(boardId: string) {

  }

  setBoardTitle(boardId: string, boardTitle: string) {

  }

  moveBoard(boardId: string, fromIndex: number, toIndex: number) {

  }
}