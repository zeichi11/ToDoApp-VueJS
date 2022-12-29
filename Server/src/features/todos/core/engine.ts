import Worker from '../../workspace/controller/workspace'
import ActionCommand from '../action/actionCommand'

export default class Engine {
  _boardId: string | null = null
  _actionCommand: ActionCommand | null = null

  constructor(boardId: string, actionCommand: ActionCommand) {
    this._boardId = boardId
    this._actionCommand = actionCommand
  }

  /**
   * do work
   */
  doWork() {
    if (this._boardId !== null && this._actionCommand !== null) {
      const worker = new Worker(this._boardId)
      if (worker) {
        try {
          worker.open()
          worker.doCommand(this._actionCommand) && worker.save()
        } catch (e: any) {
          console.error(e.message)
        }
      }
    }
  }
}

