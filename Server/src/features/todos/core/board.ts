import ActionCommand from '../action/actionCommand'
import { COMMAND } from '../common/constants'
import insertCommand from './command/insertCommand'
import updateCommand from './command/updateCommand'
import deleteCommand from './command/deleteCommand'

export default class Board {
  _boardId: string | null = null

  constructor(boardId: string) {
    this._boardId = boardId
  }

  /**
   * Execute command
   */
  executeCommand(actionString: string) {
    if (!actionString.length) {
      return false
    }

    const actionCommand: ActionCommand = new ActionCommand(actionString)
    const cmd = actionCommand.cmd
  
    switch (cmd) {
      case COMMAND.CMD_INSERT:
        return insertCommand(actionCommand)
      case COMMAND.CMD_UPDATE:
        return updateCommand(actionCommand)
      case COMMAND.CMD_DELETE:
        return deleteCommand(actionCommand)
      default:
        return false
    }
  }
}